# copilot-strategy

Microsoft Copilot Strategy

## Documents

- [Microsoft Copilot solutions analysis: Copilot Code vs Copilot Studio vs GitHub Copilot App](docs/microsoft-copilot-solutions-analysis.md): an executive summary, a weighted rating card, product deep dives and an explanation of the GitHub Copilot harness and the Copilot Managed Runtime. It also covers pricing and billing, CI/CD and governance, monitoring, connectors, GitHub Enterprise, and integration with Agent 365, Foundry, Databricks and Snowflake. It ends with pros and cons, personas, a decision tree, FinOps scenarios, a roadmap and sources. It includes 20 Mermaid diagrams.

## Slide deck

A 35-minute online presentation built with [Marp](https://marp.app/) from the analysis above, refreshed with the latest GitHub Universe 2026 and Microsoft announcements (as of 17 November 2026).

- Source: [deck/copilot-strategy.md](deck/copilot-strategy.md). Presenter notes with cumulative `[mm:ss]` timings are in each slide's HTML comment.
- Theme: [deck/themes/copilot.css](deck/themes/copilot.css).
- Live version: <https://frkim.github.io/copilot-strategy/>. A PDF is also attached to each workflow run as the `copilot-strategy-pdf` artifact.

### Build locally

Requires Node.js 20 or later and a Chromium-based browser (Chrome or Edge) for PDF export.

```bash
npm ci
npm run build       # HTML -> dist/index.html
npm run build:pdf   # PDF  -> dist/copilot-strategy.pdf
npm run build:pptx  # PowerPoint -> dist/copilot-strategy.pptx
npm start           # live preview server with hot reload
```

### Build and deploy

The [Build and deploy deck](.github/workflows/deploy-deck.yml) workflow runs on pushes and pull requests to `main` that touch the deck, and can also be started manually. It builds the HTML and PDF, uploads the PDF as an artifact and, for pushes to `main` and manual runs, deploys `dist/` to GitHub Pages.

One-time setup: in **Settings → Pages**, set **Source** to **GitHub Actions**.
