# AI OS Registry

Versioned rule repository for AI OS — the intelligence layer for AI coding agents.

## Structure

```
latest.json                    ← Version pointer
versions/
  1.0.0/
    AGENTS.md                  ← Agent behavioral rules
    RULES.md                   ← Global operational rules
    MEMORY.md                  ← Project memory template
    stacks/
      manifest.json            ← Stack routing manifest
      web/nextjs.md
      web/react-vite.md
      web/svelte.md
      backend/dotnet.md
      mobile/ionic-capacitor.md
      desktop/electron.md
    prompts/
      bugfix.md
      feature.md
      refactor.md
```

## Supported Stacks

| Stack | Category | Runtime |
|-------|----------|---------|
| nextjs | fullstack | node |
| react-vite | frontend | node |
| svelte | frontend | node |
| dotnet | backend | dotnet |
| ionic-capacitor | mobile | node |
| electron | desktop | node |

## Versioning

- Each version is an **immutable** folder
- `latest.json` points to the active version
- New updates = new version folder
- CLI runs `ai sync` to pull updates

## Deployment

Hosted on VPS with Nginx reverse proxy and Certbot SSL.

See [ai-os/docs/DEPLOYMENT.md](../ai-os/docs/DEPLOYMENT.md) for full setup guide.