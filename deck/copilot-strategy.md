---
marp: true
theme: copilot
paginate: true
size: 16:9
title: Microsoft Copilot Strategy
description: Microsoft Copilot for Builders — Copilot Code, Copilot Studio and the GitHub Copilot App (Nov 2026)
header: Microsoft Copilot for Builders
footer: Microsoft Copilot Strategy · Nov 2026
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

# Microsoft Copilot for Builders

## Code · Studio · GitHub Copilot App

### Strategy, economics, governance — Nov 2026 (Ignite edition)

**[Presenter name]** · 17 November 2026

<!--
[00:45] Welcome. Over the next 35 minutes we look at the three Microsoft experiences that let people build with Copilot: Copilot Code, Copilot Studio and the GitHub Copilot App. Ignite runs this week, 17–20 November, so anything announced there is marked as "watch this week", not as fact. Status icons on the slides: ✅ verified, 🟡 partial, 🔶 inferred, ❓ unconfirmed.
-->

---

## Agenda — 35 minutes

<div class="columns">
<div>

| # | Section | Time |
|---|---|---|
| 0 | Opening | 3 min |
| 1 | Landscape & what's new | 5 min |
| 2 | Product deep dives | 7 min |
| 3 | Economics | 5½ min |

</div>
<div>

| # | Section | Time |
|---|---|---|
| 4 | Governance & security | 5½ min |
| 5 | Decide | 4½ min |
| 6 | Roadmap & close | 4½ min |
| — | Q&A | after |

</div>
</div>

> Legend used throughout: ✅ verified · 🟡 partial · 🔶 inferred · ❓ unconfirmed

<!--
[01:45] There are six sections. The order is what exists today, what's new, how each product works, what it costs, how to govern it, how to choose, and a 12-month roadmap. The full analysis behind every number is in the repo, linked on the last slide. Questions are best kept for the end, but flag anything urgent.
-->

---

## Three builders, one Copilot name

<div class="cols-3">
<div class="card">

### Copilot Code <span class="badge preview">Preview</span>

Business users describe an **app** and publish it to the Copilot Managed Runtime (CMR).

</div>
<div class="card purple">

### Copilot Studio <span class="badge ga">GA</span>

Makers build **agents** for employees and customers, grounded in M365 data.

</div>
<div class="card blue">

### GitHub Copilot App <span class="badge ga">GA</span>

Engineers run agent sessions that end in **pull requests** on GitHub.

</div>
</div>

> On the surface they overlap. Underneath they differ in **persona, runtime, billing meter and governance plane**.

<!--
[03:00] Here's the problem. All three products say "Copilot", all three run an agent loop and all three can write code. But they serve different people, produce different artefacts (apps, agents, PRs), bill on different meters and are governed from different consoles. The rest of the talk is about choosing deliberately instead of by brand name.
-->

---

<!-- _class: dense -->

## At a glance

| | Copilot Code | Copilot Studio | GitHub Copilot App |
|---|---|---|---|
| **Home** | Code tab, Microsoft Copilot app | copilotstudio.microsoft.com | Desktop app + GitHub.com |
| **Status** | <span class="badge preview">Frontier preview</span> Oct 2026, no GA date | <span class="badge ga">GA</span> since 2023, new harnesses 2026 | <span class="badge ga">GA</span> 17 Jun 2026, Universe update 28 Oct |
| **Output** | Apps → published to CMR | Agents → Teams, M365 Copilot, web, MCP/A2A | Pull requests |
| **Billing** | M365 Copilot licence ($30) + Copilot Credits | Copilot Credits | GitHub plan + GitHub AI Credits + compute |
| **Governance** | M365 admin center, Purview, Cost Mgmt | PPAC, Agent 365, Purview, Defender | GitHub Enterprise AI Controls, audit log, rulesets |

<p class="small muted">Source: analysis doc §1 ✅ · CMR = Copilot Managed Runtime · PPAC = Power Platform admin center</p>

<!--
[04:15] This table is the whole talk compressed. Copilot Code is the newest, still a Frontier preview with no GA date. Studio is the mature one. The GitHub Copilot App went GA in June and got a big update at Universe in October. The two right-hand columns, billing and governance, are where most of the strategic work lies.
-->

---

## Positioning — audience × enterprise readiness

<div style="display:grid;grid-template-columns:150px 1fr 1fr;grid-template-rows:auto 1fr 1fr;gap:14px;height:440px">
<div></div>
<div class="center small"><strong>Business users &amp; makers</strong></div>
<div class="center small"><strong>Professional developers</strong></div>
<div class="small" style="align-self:center"><strong>Enterprise-ready</strong></div>
<div class="card purple">

### Copilot Studio

Agents with mature ALM, DLP and Agent 365 identity.

</div>
<div class="card blue">

### GitHub Copilot App · Foundry

PR-centric engineering; code-first hosted agents.

</div>
<div class="small" style="align-self:center"><strong>Emerging</strong></div>
<div class="card">

### Copilot Code

Frontier preview; no rate card yet; pilot only.

</div>
<div class="card teal">

### Previews inside the App

Copilot Projects, computer use, Security extension.

</div>
</div>

<!--
[05:15] Plot the products on two axes, who builds and how enterprise-ready it is. Studio owns the business, enterprise-ready quadrant. The GitHub Copilot App and Foundry own the pro-developer one. Copilot Code is the interesting newcomer: business audience, but still emerging, so treat it as a governed pilot. The bottom-right box lists App features that are still in preview.
-->

---

<!-- _class: dense -->

## What's new — GitHub (Universe, 28 Oct 2026)

<div class="columns">
<div class="card blue">

### Universe announcements ✅

- **Copilot Fusion** GA: Standard / High / Max effort
- Fusion modes: Single, Cascade, Critique
- **Cloud sandboxes** GA; no 1-hour limit
- **Agent Merge** in the cloud; **Automations** with AI-credit limits
- **Copilot Projects** + computer use <span class="badge preview">Preview</span>
- **GitHub Enterprise includes Copilot** (metered; $10 standalone)

</div>
<div class="card">

### Changelog since ✅

- SDK → **Microsoft Copilot SDK** (28 Oct)
- Plugin controls GA (28 Oct)
- App on **GHES** GA, v1.2.0, no cloud sessions (13 Nov)
- `strictPluginOnlyCustomization` (16 Nov)
- VS Code Local harness retires Feb 2027 (16 Nov)
- Model deprecations 16 Nov and 14 Dec

</div>
</div>

<p class="small muted">Also GA at Universe: Agentic Workflows, Copilot Memory · 26 verified MCP connectors incl. Work IQ (preview) · "50M Copilot users" ❓</p>

<!--
[06:45] GitHub moved fast. Fusion is now GA. It routes work across models at three effort levels, and GitHub claims Fusion Max gets within two points of Opus 5.5 Max at about half the cost. That claim is GitHub's own, so treat it as 🟡 until you benchmark it. The biggest commercial change is that GitHub Enterprise now includes Copilot, metered from the first request. The SDK rename to "Microsoft Copilot SDK" is the clearest signal that GitHub and Microsoft are converging on one agent stack.
-->

---

<!-- _class: dense -->

## What's new — Microsoft (Frontier → Ignite)

<div class="columns">
<div class="card purple">

### Shipped in 2026 ✅

- **Agent 365** + **Entra Agent ID** GA 1 May; $15/user
- **Copilot Cowork** GA 16 Jun
- Studio **Microsoft Copilot harness** GA (2 Sep)
- **Foundry hosted agents** GA (9 Sep)
- **CMR** public preview (25 Sep); **Copilot Code** Frontier (Oct)
- Studio A2A, MCP server, Customer Conversation harness (4 Nov)

</div>
<div class="card">

### Watch this week — Ignite 17–20 Nov ❓

- Copilot Code GA date and rate card
- CMR GA (Learn dropped "preview" 17 Nov)
- Plugin Catalog for the new Copilot Home
- Agent 365 ↔ GitHub agent bridge
- Agent 365 as AI observability platform

</div>
</div>

<p class="small muted">Signals: M365 Copilot seats +160% YoY · ~50M agents registered in Agent 365 (30 Sep) · 19 Oct: agent discovery adds GitHub Copilot 🟡</p>

<!--
[08:00] On the Microsoft side, the foundations went GA in May: Agent 365 and Entra Agent ID. Studio's new harness went GA in September. Copilot Code and the Copilot Managed Runtime are the newest pieces, and both are still in preview. Ignite announcements weren't published when this deck was built, so the right column is a watch list, not facts. Check it against the Book of News this week.
-->

---

<!-- _class: divider -->

#### Section 2 · 7 minutes

# Product deep dives

<!--
[08:15] Now let's look under the hood of each product. For each one, keep three questions in mind: where does it run, what does it produce, and who governs it.
-->

---

## Copilot Code <span class="badge preview">Frontier preview</span>

<div class="columns wide-left">
<div>

- **Code tab** in the Microsoft Copilot app (Windows, macOS, web)
- Beta channel via Intune policy; no mobile app
- Runs **in the cloud** by default; local protected folder is optional
- Modes: Interactive · Plan · Automatic
- Grounded in **Work IQ**; extend with MCP, skills, Cowork plugins
- Publishes apps to **CMR**; GitHub connection off by default

</div>
<div class="card">

### Watch-outs

- Local execution **off** by default for orgs ✅
- Folders shared across projects ✅
- RAI transparency card returns 404 ❓
- No rate card for Code or CMR ✅

</div>
</div>

<!--
[09:30] Copilot Code is Claude-Code-style building for business users, inside the Microsoft Copilot app. It runs in the cloud by default and grounds on Work IQ, so it knows your organisation's context. Its output is an app published to the Copilot Managed Runtime. Today it's a Frontier preview with real gaps: folders are shared across projects, the responsible-AI card isn't available and there's no rate card. Pilot it, don't scale it.
-->

---

## Copilot Studio <span class="badge ga">GA</span>

<div class="cols-3">
<div class="card">

### Standard

Billed **only after publishing**.

</div>
<div class="card purple">

### Microsoft Copilot harness

GA 2 Sep (formerly GitHub Copilot harness). **Authoring and testing consume credits.**

</div>
<div class="card teal">

### Customer Conversation

<span class="badge preview">Preview</span> (4 Nov 2026), for customer-facing agents.

</div>
</div>

- 2026: Evaluations GA (Mar) · A2A GA (Apr) · auto **Entra Agent ID** (Jul)
- Oct–Nov: Work IQ GA · Studio MCP server · publish as MCP/A2A endpoints
- ALM: Dataverse Git integration, Pipelines, ALM Starter, Evaluations API

<!--
[10:45] Studio is the mature, governed platform for agents. There are now three harnesses. Note the cost difference: the new Microsoft Copilot harness charges credits during authoring and testing, not just in production. Every agent automatically gets an Entra Agent ID, and agents can now be published as MCP or A2A endpoints, so GitHub Copilot, Claude Code or Codex can call them. ALM is real: Git integration, pipelines and evaluations as quality gates.
-->

---

## GitHub Copilot App <span class="badge ga">GA</span>

<div class="columns">
<div>

- **One worktree per session**: local, MXC or cloud sandbox
- Modes: Interactive · Plan · Autopilot
- **Agent Merge** and **Automations**: PRs through to merge
- **Projects**, **Fusion**, Canvases, BYOK
- Custom agents and skills, MCP, plugins
- GHES supported (no cloud sessions)

</div>
<div class="card blue">

### The family

- **Cloud agent** works on `copilot/*` branches
- **Code review**: Lite · Balanced · Max
- **SDK** GA in 6 languages
- **Agent HQ**: Claude and Codex alongside Copilot

</div>
</div>

<!--
[12:00] The GitHub Copilot App is the engineering cockpit. Each session gets its own worktree and can run locally, in a sandbox or in the cloud. Agent Merge and Automations now carry work from issue to merged PR. Around it sits a family: the cloud agent, code review, the SDK, and Agent HQ for third-party agents. Everything lands as a pull request, which is why it fits existing CI/CD and rulesets so well.
-->

---

## One harness, many wrappers

<div class="columns wide-left">
<div>

<div class="card" style="padding:8px 16px;margin-bottom:6px"><strong>L0 Surfaces</strong> · App, CLI, VS Code, Studio, Copilot Code</div>
<div class="card purple" style="padding:8px 16px;margin-bottom:6px"><strong>L1 SDK clients</strong> · Node, Python, Go, .NET, Rust, Java</div>
<div class="card blue" style="padding:8px 16px;margin-bottom:6px"><strong>L2 Transport</strong> · JSON-RPC (v1) / Rust FFI (v2)</div>
<div class="card teal" style="padding:8px 16px;margin-bottom:6px"><strong>L3 Harness</strong> · loop, tools, permissions, hooks, skills, MCP</div>
<div class="card" style="padding:8px 16px;margin-bottom:6px"><strong>L4 Models</strong> · CAPI, Fusion, BYOK</div>
<div class="card purple" style="padding:8px 16px;margin-bottom:6px"><strong>L5 State &amp; policy</strong></div>
<div class="card blue" style="padding:8px 16px"><strong>L6 Execution</strong> · local/MXC, cloud sandbox, Actions, Foundry</div>

</div>
<div>

> The **agent loop is converging**. The **commercial wrappers aren't**.

- Skills, agents and MCP configs are **portable** ✅
- SDK renamed **Microsoft Copilot SDK** (28 Oct) ✅
- Invest in assets that move between surfaces

</div>
</div>

<!--
[13:45] This is the most important architecture slide. Under all three products sits the same kind of harness: an agent loop with tools, permissions, hooks, skills and MCP. Studio's harness literally started life as the GitHub Copilot harness. But licensing, billing and governance still differ for each wrapper. So invest in portable assets: skills, custom agents and MCP servers that work on every surface.
-->

---

<!-- _class: dense -->

## Runtimes — where things actually run

| Runtime | Isolation | Identity | Billing |
|---|---|---|---|
| **GitHub cloud sandbox** | Isolated Linux per session; snapshot/resume | GitHub token | AI Credits + vCPU-seconds |
| **Foundry hosted agents** | Per-session VM; scales to zero | Entra Agent ID + OBO | Azure vCPU-hours |
| **Copilot Managed Runtime** | Tenant boundary + CSP; versioned deploys | Entra user | Spending policy (no rate card) |
| **Studio runtime** | Power Platform environment | Entra Agent ID | Copilot Credits |

> **CMR hosts TypeScript/JavaScript apps, not agents.** Public preview since 25 Sep 2026. It provides Entra auth, Conditional Access, DLP and versioning.

<p class="small muted">Source: analysis doc §6 ✅ · OBO = on-behalf-of</p>

<!--
[15:00] Four runtimes, four identity models, four bills. A common confusion: the Copilot Managed Runtime hosts apps, not agents. If you need a hosted, code-first agent, use Foundry hosted agents. Notice that only Foundry and Studio give the agent its own Entra identity. GitHub sandboxes run on a GitHub token, which matters for the governance section.
-->

---

<!-- _class: divider -->

#### Section 3 · 5½ minutes

# Economics

<!--
[15:15] Now the money. The headline: everything is quoted at about one cent per credit, but the credits aren't the same currency.
-->

---

## Three meters — ~$0.01 each, not interchangeable

<div class="cols-3">
<div class="card purple">

### Copilot Credits

Microsoft billing · **Studio, Code, CMR**

- Pack: $200 = 25,000 credits
- PAYG $0.01 — never blocks
- P3 pre-purchase: up to 20% off

</div>
<div class="card blue">

### GitHub AI Credits

GitHub billing · **App, cloud agent, review**

- Replaced premium requests on 1 Jun
- Business 1,900 · Enterprise 3,900 pooled
- Overage **on by default**

</div>
<div class="card teal">

### Azure consumption

Azure billing · **Foundry**

- Hosted agents: vCPU-hours
- Model tokens per deployment
- Azure budgets and Cost Management

</div>
</div>

> Three invoices, three budget tools. FinOps has to merge them into **one report**.

<!--
[16:30] There are three meters. Copilot Credits cover Studio, Copilot Code and CMR. GitHub AI Credits replaced premium requests on 1 June and cover the GitHub side. Foundry bills through normal Azure consumption. They all look like one cent, but you can't move budget between them, and they're managed in different consoles.
-->

---

<!-- _class: dense -->

## Pricing comparison

| | Copilot Code | Copilot Studio | GitHub Copilot App |
|---|---|---|---|
| **Seat** | M365 Copilot $30 | None needed (credits) | Business $19 · Enterprise $39; included in GHE ($10 standalone) |
| **Currency** | Copilot Credits | Copilot Credits | GitHub AI Credits + vCPU-s |
| **Rate card** | ❌ none published | ✅ per feature | ✅ per model + sandbox |
| **Pre-purchase** | P3 (up to 20%) | Packs, P3 | Seats include credits |
| **Hard caps** | Spending policy | 125% block on packs; per-agent limits | Budgets; alerts 75/90/100% |
| **Predictability** | 🔴 Low | 🟡 Medium | 🟡 Medium |

<p class="small muted">Sandboxes $0.000024/vCPU-s · $0.000003/GiB-s · data residency +10% · Individual: Pro $10, Pro+ $39, Max $100</p>

<!--
[17:45] Side by side: Copilot Code needs the $30 M365 Copilot licence plus credits, and there's still no rate card, so its predictability is low. Studio has a full rate card, plus hard stops at 125% of prepaid capacity and per-agent limits. On GitHub, Enterprise now includes Copilot access metered from the first request, while Business and Enterprise seats include pooled credits. Overage is on by default, so set budgets on day one.
-->

---

<!-- _class: dense -->

## Copilot Studio — what consumes credits

<div class="columns wide-left">
<div>

| Feature | Copilot Credits |
|---|---|
| Classic answer | 1 |
| Generative answer | 2 |
| Agent action | 5 |
| Tenant Graph grounding | 10 |
| Flow actions | 13 per 100 |
| Premium model tokens | 10 per 1,000 |

<p class="tiny muted">Also: content processing 8/page · voice 10 / 35 / 75 per minute</p>

</div>
<div>

<div class="kpi"><span class="value">141–461</span><span class="label">credits per Claude Opus turn</span></div>

> **Premium models change everything.** One turn can cost 50–200× a generative answer. Choose the model per agent, and enforce it.

</div>
</div>

<!--
[19:00] Here's the Studio rate card. Most interactions cost one to ten credits. The trap is premium models: a single Claude Opus turn costs 141 to 461 credits. That's why the next slide shows a 40× spread for the same HR agent. Model choice is a FinOps decision, not just a quality decision.
-->

---

## FinOps scenarios (monthly)

<div class="cols-4">
<div class="card blue">

<div class="kpi"><span class="value">$7.9k</span><span class="label">A · 100 devs on GitHub Enterprise</span></div>

<p class="tiny">Seats $3.9k + overage $1.6k + sandboxes ~$0.35k + GHEC ~$2.1k</p>

</div>
<div class="card purple">

<div class="kpi"><span class="value">$0.6k→$61k</span><span class="label">B · Studio HR agent, 10k conversations</span></div>

<p class="tiny">B3 $600 · B1 $1.6k · B2 $2.6k · B4 premium model ≈ 40×</p>

</div>
<div class="card">

<div class="kpi"><span class="value">≤$10k</span><span class="label">C · Copilot Code pilot, 200 users</span></div>

<p class="tiny">Licences $6k + credits capped at $4k (~$4k incremental)</p>

</div>
<div class="card teal">

<div class="kpi"><span class="value">$15k</span><span class="label">D · Agent 365, 1,000 users</span></div>

<p class="tiny">$15/user/month · needed for observability</p>

</div>
</div>

> Model choice and default overage drive cost more than seat counts. Light GitHub users: compare seats against included Copilot access.

<!--
[20:30] Four scenarios from the analysis. A hundred developers on GitHub Enterprise cost about $7,900 a month, all in. The same Studio HR agent costs anywhere from $600 to $61,000 depending on model choice. A 200-user Copilot Code pilot can be capped at about $10,000, of which roughly $4,000 is incremental. Agent 365 for 1,000 users is $15,000, and it's the price of seeing what your agents do.
-->

---

<!-- _class: divider -->

#### Section 4 · 5½ minutes

# Governance & security

<!--
[20:45] Cost is one control plane; security is the other. The key idea in this section is the governance seam between the Microsoft and GitHub worlds.
-->

---

<!-- _class: dense -->

## Security & governance matrix

| Control | Copilot Code | Copilot Studio | GitHub Copilot App |
|---|---|---|---|
| **Admin enablement** | M365 admin + Frontier opt-in | PPAC, Managed Environments | **AI Controls** (GA 26 Feb) |
| **Agent identity** | Inherits user 🔶 | **Entra Agent ID**, automatic | GitHub bot; `actor_is_agent` |
| **DLP** | Purview coverage ❓ | Power Platform data policies | Content exclusion |
| **Threat protection** | Defender for Endpoint 🔶 | Defender real-time <span class="badge preview">Preview</span> | Defender agent runtime <span class="badge preview">Preview</span> + GHAS |
| **MCP governance** | Admin-controlled 🟡 | Certified connectors + DLP | MCP allowlist registry + `managed-settings` |
| **Audit** | Admin audit (code, commands, files) | Purview audit | `agent_session.task` → SIEM |

<!--
[22:00] Read this row by row. Studio is the strongest: an automatic agent identity, data policies that also block dependent MCP tools, and real-time Defender protection on tool calls. GitHub is strong in its own plane: AI Controls, MCP allowlists and agent-tagged audit events. Copilot Code has the most inferred or unconfirmed cells, which is expected for a preview.
-->

---

## The governance seam

<div class="columns">
<div class="card purple">

### Microsoft plane

- **Agent 365**: inventory and observability
- **Entra Agent ID**: identity and Conditional Access
- **Purview**: DLP and audit
- **Defender**: threat protection

</div>
<div class="card blue">

### GitHub plane

- **AI Controls**: policies and agent permissions
- Model and MCP allowlists, plugin controls
- Audit log streaming, rulesets
- Usage metrics API

</div>
</div>

> **No evidence of a bridge** between Agent 365 and GitHub agents ❓. 19 Oct: Defender agent discovery adds GitHub Copilot 🟡. **Mitigation: join both in Microsoft Sentinel.**

<!--
[23:15] This is the strategic gap. Microsoft agents live in Agent 365 with Entra identities. GitHub agents live in GitHub AI Controls. Nothing we've seen connects the two inventories, although October's agent discovery update now detects local GitHub Copilot, which is a partial signal. Until a bridge ships, maybe at Ignite, stream both audit logs into Sentinel and correlate there.
-->

---

<!-- _class: dense -->

## Minimum policy baseline

<div class="cols-4">
<div class="card blue">

### GitHub

- AI Controls on
- Model + MCP allowlists
- Content exclusion
- Rulesets on agent PRs
- Restrict cloud-agent assignment
- Budgets; review overage

</div>
<div class="card purple">

### Studio

- Managed Environments
- DLP: block MCP/HTTP by default
- Defender real-time protection
- Per-agent credit limits
- Register in Agent 365

</div>
<div class="card">

### Copilot Code

- Pilot group only
- Local execution off
- GitHub connection: GHE only
- Low spending policy
- No regulated data

</div>
<div class="card teal">

### Across all

- Sentinel as the single pane
- Monthly Agent 365 review
- One MCP catalogue
- FinOps report across 3 meters

</div>
</div>

<!--
[24:45] This is the day-one checklist. On GitHub: turn on AI Controls, allowlist models and MCP servers, protect agent PRs with rulesets, and set budgets because overage is on by default. On Studio: use Managed Environments, block MCP and HTTP connectors in DLP by default, and set per-agent limits. Keep Copilot Code inside a small pilot group with no regulated data.
-->

---

## Monitoring — one telemetry standard

<div class="columns wide-left">
<div>

- **GitHub**: usage metrics API (GA 27 Feb, NDJSON) + audit streaming
- **GitHub CLI / VS Code**: OTel export (8 Jul)
- **Studio**: Application Insights export
- **Foundry**: OpenTelemetry GenAI tracing
- **Agent 365**: needs ≥1 licence, or telemetry is **silently dropped**
- **Copilot Code**: admin audit only (low maturity)

</div>
<div class="card">

### KPIs to track

- Agent PR merge rate
- Credits per merged PR
- Cost per resolved conversation
- DLP and policy hits

**Sink:** OTel → Azure Monitor → Sentinel

</div>
</div>

<!--
[26:00] Standardise on OpenTelemetry GenAI conventions and land everything in Azure Monitor and Sentinel. Watch the Agent 365 trap: without at least one licence, observability data is silently dropped. Track outcome metrics, not usage: merge rate and credits per merged PR for engineering, and cost per resolved conversation for Studio.
-->

---

<!-- _class: dense -->

## Rating card — weighted score

<div class="cols-3">
<div class="kpi center"><span class="value">3.05</span><span class="label">Copilot Code</span></div>
<div class="kpi center"><span class="value">4.05</span><span class="label">Copilot Studio</span></div>
<div class="kpi center"><span class="value">3.65</span><span class="label">GitHub Copilot App</span></div>
</div>

<div class="columns">
<div>

| Criterion (weight) | Code | Studio | App |
|---|---|---|---|
| Maturity (10%) | 2 | 5 | 4 |
| Pro-SWE depth (10%) | 3 | 2 | 5 |
| Non-dev access (10%) | 5 | 4 | 2 |
| Security/gov. (15%) | 3 | 5 | 4 |
| CI/CD-GHE (10%) | 3 | 3 | 5 |

</div>
<div>

| Criterion (weight) | Code | Studio | App |
|---|---|---|---|
| M365 grounding (10%) | 4 | 5 | 2 |
| Connectors (10%) | 3 | 5 | 3 |
| Monitoring (10%) | 2 | 4 | 4 |
| Cost predictability (10%) | 2 | 3 | 3 |
| Model choice (5%) | 4 | 4 | 5 |

</div>
</div>

<!--
[27:15] Section 5 is about deciding. The weighted scores are 3.05 for Copilot Code, 4.05 for Studio and 3.65 for the GitHub Copilot App. Don't read this as a league table: each product wins its own criteria. Studio wins on governance and grounding, the App on engineering depth and CI/CD, and Code on accessibility for non-developers. The weights reflect an enterprise buyer, so adjust them to your context.
-->

---

<!-- _class: dense -->

## Personas → primary tool

| Persona | Primary tool | Secondary |
|---|---|---|
| Knowledge worker | Copilot Code (pilot) | Copilot Cowork |
| Maker / data analyst | Copilot Studio | Power Platform |
| Pro developer | GitHub Copilot App | Cloud agent, CLI |
| Platform / DevOps | GitHub App + Actions | Agentic Workflows |
| AI engineer | Foundry + Agent Framework | Copilot SDK |
| Security / IT & FinOps | Agent 365 + Purview + Defender | Billing consoles |

<p class="small muted">Source: analysis doc §16 (data and IT/FinOps rows merged) · secondary column 🔶</p>

<!--
[28:15] Map people to products, not products to people. Pro developers and platform teams live in the GitHub App. Makers and data analysts live in Studio. AI engineers building code-first agents go to Foundry and the Agent Framework. Knowledge workers get Copilot Code, but only as a pilot for now. Security and FinOps teams are personas too: their tools are Agent 365, Purview, Defender and the billing consoles.
-->

---

## Rules of thumb

<div class="columns wide-left">
<div>

1. Engineer writing production code → **GitHub Copilot App**
2. Agent for employees or customers → **Copilot Studio**
3. Custom code-first agent → **Foundry + Agent Framework / SDK**
4. Business user building an app → **Copilot Code pilot on CMR**
5. **If it becomes important, move it to GitHub**

</div>
<div class="card purple">

### Why rule 5?

Repos give you review, rulesets, CI/CD, security scanning and ownership. Anything business-critical needs that, whoever built it first.

</div>
</div>

<!--
[29:15] Five rules cover most cases. The fifth is the important one: whatever starts in Copilot Code or as a Studio prototype, once it matters to the business it belongs in a GitHub repo, with review, CI/CD and an owner. That's the bridge between citizen building and professional engineering.
-->

---

<!-- _class: dense -->

## Better-together reference architecture

<div class="columns wide-left">
<div>

<div class="card" style="padding:8px 16px;margin-bottom:6px"><strong>People</strong> · knowledge workers · makers · developers · AI engineers</div>
<div class="card purple" style="padding:8px 16px;margin-bottom:6px"><strong>Build</strong> · Copilot Code · Copilot Studio · GitHub App · Foundry</div>
<div class="card blue" style="padding:8px 16px;margin-bottom:6px"><strong>Runtimes</strong> · CMR · Studio · GitHub sandbox/Actions · Foundry hosted</div>
<div class="card teal" style="padding:8px 16px;margin-bottom:6px"><strong>Data (MCP-first)</strong> · Work IQ · Dataverse · APIs via API Center</div>
<div class="card" style="padding:8px 16px"><strong>Governance</strong> · Agent 365 · Entra · Purview · Defender · AI Controls · Sentinel</div>

</div>
<div>

### Five principles

1. One repo platform
2. One data-access pattern: MCP + OBO
3. One agent inventory
4. One telemetry standard: OTel
5. Two FinOps ledgers, one report

</div>
</div>

<!--
[30:30] This is the target architecture: five layers, from people through build tools and runtimes to MCP-first data, with governance underneath everything. The five principles are what keep it coherent. Note principle 5: we can't merge the two billing systems, but we can merge the report.
-->

---

## Adoption roadmap

<div class="cols-3">
<div class="card blue">

### Phase 1 · 0–90 days

- Governance on both billing planes
- Engineering pilot: 1–2 squads
- Studio CoE + ALM Starter
- Telemetry → Sentinel

</div>
<div class="card purple">

### Phase 2 · 3–6 months

- Scale the GitHub App
- Ship 3–5 Studio agents; evals as gates
- Start the Copilot Code pilot
- MCP catalogue in API Center

</div>
<div class="card teal">

### Phase 3 · 6–12 months

- P3 pre-purchase; seats vs access review
- Foundry hosted agents
- Decide on Copilot Code at GA
- One FinOps report

</div>
</div>

<!--
[31:30] The final section is the roadmap. Phase 1 is governance first: both billing planes, telemetry into Sentinel and a small engineering pilot. Phase 2 scales what works and starts the Copilot Code pilot. Phase 3 optimises commercially with pre-purchase and a seats-versus-access review, and makes the Copilot Code decision once it reaches GA.
-->

---

<!-- _class: dense -->

## Top risks

| # | Risk | Mitigation |
|---|---|---|
| 1 | No rate card for Copilot Code and CMR | Low spending policy; pilot only |
| 2 | Shared folders across Code projects | No sensitive data; separate pilot users |
| 3 | RAI card and Purview coverage gaps for Code | Hold regulated workloads until GA |
| 4 | GitHub agents absent from Agent 365 | Correlate in Sentinel; watch Ignite |
| 5 | GitHub overage on by default | Budgets + 75/90/100% alerts |
| 6 | Premium models → ~40× cost variance | Per-agent model policy and limits |

<p class="small muted">Also: 125% block on prepaid Studio capacity · agent firewall doesn't cover MCP servers · Ignite announcements not yet included</p>

<!--
[32:30] Six risks to own. Three are about Copilot Code's preview maturity. One is the governance seam. Two are financial: GitHub overage on by default and premium-model variance in Studio. Each has a concrete mitigation, most of them already in the policy baseline.
-->

---

## What to watch (post-Ignite)

<div class="columns">
<div>

- **Copilot Code**: GA date and rate card ❓
- **CMR** GA (Learn dropped "preview" 17 Nov) ❓
- **Agent 365 ↔ GitHub** agent bridge ❓
- Microsoft Copilot SDK rename rollout 🟡

</div>
<div>

- Copilot access licensing in GitHub Enterprise
- **Fusion** pricing at scale vs claims 🟡
- Studio harness + Defender real-time GA
- OTel GenAI conventions → stable

</div>
</div>

> Re-score the rating card after Ignite. Copilot Code's score moves the most if it reaches GA with a rate card.

<!--
[33:30] Here's the watch list for this week and the next quarter. The big three are a Copilot Code GA with a rate card, a CMR GA, and any bridge between Agent 365 and GitHub agents. If those land, re-score the rating card. Copilot Code has the most upside.
-->

---

## The recommendation

<div class="cols-3">
<div class="card blue">

### Engineering

**GitHub Copilot App**

Standardise now. Govern with AI Controls and budgets.

</div>
<div class="card purple">

### Business agents

**Copilot Studio**

Add Foundry for code-first agents and Agent 365 for inventory.

</div>
<div class="card">

### Democratised building

**Copilot Code**

Governed pilot on CMR. Decide at GA.

</div>
</div>

> One Copilot brand, **three deliberate choices**, one governance and FinOps view.

<!--
[34:15] If you remember one slide, make it this one. Standardise engineering on the GitHub Copilot App. Build business agents in Copilot Studio, with Foundry and Agent 365 alongside. Run Copilot Code as a governed pilot until it reaches GA. Then tie all three together with one governance view and one FinOps report.
-->

---

<!-- _class: dense -->

## Q&A · Sources

<div class="columns wide-left">
<div class="small">

- Full analysis: [github.com/frkim/copilot-strategy — analysis doc](https://github.com/frkim/copilot-strategy/blob/main/docs/microsoft-copilot-solutions-analysis.md)
- [GitHub Changelog](https://github.blog/changelog) · [Universe 2026 blog](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/)
- [GitHub Enterprise includes Copilot](https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot/) · [Microsoft Copilot SDK](https://github.blog/changelog/2026-10-28-github-copilot-sdk-is-becoming-microsoft-copilot-sdk/)
- [Copilot Code overview](https://learn.microsoft.com/en-us/copilot/code/overview) · [Copilot Managed Runtime](https://learn.microsoft.com/en-us/microsoft-365/copilot-managed-runtime/)
- [Copilot Studio what's new](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new) · [Copilot Credits billing](https://learn.microsoft.com/en-us/copilot/plan/usage-based-billing-overview-copilot-credits)
- [Agent 365](https://www.microsoft.com/en-us/microsoft-agent-365) · [Agent 365 at Ignite 2026](https://techcommunity.microsoft.com/blog/agent-365-blog/microsoft-ignite-2026-your-guide-to-agent-365/4571750)

</div>
<div class="card purple">

### Thank you — questions?

**Legend**
✅ verified · 🟡 partial
🔶 inferred · ❓ unconfirmed

<p class="tiny muted">Facts as of 17 Nov 2026. Ignite items not yet confirmed.</p>

</div>
</div>

<!--
[35:00] Thank you. Every number in this deck traces back to the analysis document in the repo, which lists its sources. The changelog and Learn links are the places to watch this week. Happy to take questions.
-->
