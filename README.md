# Alexapedia EG

Static Angular site — no backend. Edit content in `src/app/data/company.data.ts`.

## Local

```bash
npm install
npm start
```

## Docker (local test)

```bash
docker compose up --build
```

Open http://localhost:8080

## Coolify deploy

See steps below — use **Dockerfile** build pack, port **80**, health path `/health`.
