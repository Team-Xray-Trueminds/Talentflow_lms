# Stitch MCP Agent Guide

This guide explains how an AI agent should use Stitch MCP in this workspace.

## Prerequisites

- Stitch MCP server is configured in user MCP settings with:
  - endpoint: `https://stitch.googleapis.com/mcp`
  - header: `X-Goog-Api-Key`
- Authentication is handled by MCP config. Do not hardcode API keys in code or commands.

## Core Workflow

1. Resolve project/screen context
2. Fetch screen metadata from Stitch MCP
3. Extract hosted download URLs from the MCP response
4. Download assets with `curl -L`
5. Convert HTML to project components/pages as needed

## Recommended Tool Sequence

### 1) Fetch project details
Use:
- `mcp_stitch_get_project`

Input shape example:
- `name: projects/{projectId}`

Purpose:
- confirm project exists
- inspect `screenInstances`
- discover source screen IDs

### 2) Fetch specific screen details
Use:
- `mcp_stitch_get_screen`

Input shape example:
- `projectId: "6646169801670281732"`
- `screenId: "fde41efcce39461e8a75a195d75e8b1a"`
- `name: "projects/6646169801670281732/screens/fde41efcce39461e8a75a195d75e8b1a"`

Expected response fields:
- `title`
- `screenshot.downloadUrl`
- `htmlCode.downloadUrl`
- dimensions/device metadata

### 3) Download generated assets
Use terminal commands with redirect support:

```bash
curl -L -o signup_screenshot.png "<screenshot.downloadUrl>"
curl -L -o signup_code.html "<htmlCode.downloadUrl>"
```

Why `-L`:
- hosted Stitch asset URLs often redirect

### 4) Verify downloads

```bash
ls -lh signup_*
wc -c signup_code.html
head -80 signup_code.html
```

### 5) Integrate into app
- Use downloaded HTML as structure/styling reference
- Rebuild in React components and routes
- Replace static anchors with router links where appropriate
- Keep design tokens and shared components consistent

## Practical Rules for Agents

- Prefer Stitch MCP metadata tools first; avoid guessing URL formats.
- Treat MCP response as source of truth for hosted asset URLs.
- Never embed API keys in source files.
- Keep downloaded artifacts in a predictable location (for example, repo root or temp folder) before integration.
- If HTML download is empty, retry with exact unescaped URL from MCP response.

## Failure Handling

- If `mcp_stitch_get_screen` fails:
  - verify `projectId` and `screenId`
  - retry with full `name` format (`projects/{project}/screens/{screen}`)
- If download returns empty file:
  - ensure URL is copied exactly
  - avoid HTML-escaped query params (`&amp;`); use raw `&`
  - retry with `curl -L`

## Minimal End-to-End Example

1. Call `mcp_stitch_get_screen` for screen ID.
2. Read `htmlCode.downloadUrl` and `screenshot.downloadUrl`.
3. Run:

```bash
curl -L -o /tmp/screen.html "<htmlCode.downloadUrl>"
curl -L -o /tmp/screen.png "<screenshot.downloadUrl>"
```

4. Inspect files and then implement the page in `src/pages/`.
