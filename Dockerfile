# Alexapedia — Coolify / production image
# Multi-stage: build Angular → serve with nginx

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NG_BUILD_CACHE=0
RUN npm run build -- --configuration=production

# ── runtime ──────────────────────────────────────────
FROM nginx:1.27-alpine AS production

RUN rm -f /etc/nginx/conf.d/default.conf \
  && apk add --no-cache curl

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/alexapedia/browser /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -fsS http://127.0.0.1/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
