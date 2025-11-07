# ${{ values.name }}

${{ values.description }}

## What’s inside
- Node.js service (`src/main.js`)
- Dockerfile for containerization
- GitHub Actions CI (`.github/workflows/build.yaml`)
- Backstage catalog entity (`catalog-info.yaml`)

## Quickstart

### Local development
```bash
npm ci
npm start
# Open http://localhost:8000
```

### Tests
```bash
npm test
```

### Docker
```bash
docker build -t ${{ (values.repoUrl | parseRepoUrl).owner }}/{{ (values.repoUrl | parseRepoUrl).repo }}:dev .
docker run -p 8000:8000 ${{ (values.repoUrl | parseRepoUrl).owner }}/{{ (values.repoUrl | parseRepoUrl).repo }}:dev
```

## Repository
- **Owner:** ${{ (values.repoUrl | parseRepoUrl).owner }}
- **Name:**  ${{ (values.repoUrl | parseRepoUrl).repo }}
- **URL:** https://github.com/${{ (values.repoUrl | parseRepoUrl).owner }}/{{ (values.repoUrl | parseRepoUrl).repo }}

## Backstage
Nach dem Push kannst du die Komponente im Backstage-Katalog registrieren (falls nicht automatisch geschehen):
- `catalog-info.yaml` in Backstage importieren.
- **Owner** ist bereits auf `${{ values.owner }}` gesetzt; **Name** ist slugifiziert aus `${{ values.name }}`.