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

Use **Dockerfile** build pack, port **80**, health path `/health`.

## Vercel deploy

1. Push code to GitHub
2. Import the repo in Vercel
3. Settings are already in `vercel.json`:
   - Build: `npm run build`
   - Output: `dist/alexapedia/browser`
4. Deploy
