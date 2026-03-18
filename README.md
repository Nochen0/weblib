# weblib

A minimal frontend web library built from scratch in TypeScript. Implements JSX-like component rendering, a client-side router, and a synthetic event manager — without any framework dependencies.

## Motivation

Built to understand how modern frontend frameworks operate at a fundamental level. Rather than abstracting away the DOM, this library exposes the primitives directly: how components are declared and rendered, how navigation is handled on the client, and how events are managed across a component tree.

## Features

- **JSX-like components** — declarative component syntax that compiles to DOM operations
- **Client-side router** — hash or history-based routing with dynamic route matching
- **Synthetic event manager** — unified event delegation layer over native DOM events

## Installation

```bash
git clone https://github.com/Nochen0/weblib.git
cd weblib
bun install
```

## Usage

```bash
bun run build
bun run serve
```

## Project Structure

```
src/       # Core library source
build/     # Compiled output
index.ts   # Entry point
```

## Tech Stack

- TypeScript
- Bun
