# GraphQL Yoga + Prisma + Codegen + Bun Starter Kit

Opinionated bun template for bootstraping a graphql-yoga server with prisma persistence and codegen
graphql types.

Frameworks:

- https://the-guild.dev/graphql/yoga-server
- https://the-guild.dev/graphql/codegen
- https://github.com/prisma/prisma

Tools

- https://bun.sh/
- https://direnv.net/
- https://github.com/jdx/rtx

## Getting Started

Install dependencies:

```sh
brew install rtx direnv
rtx install bun@latest
```

Create a new project from the template:

```sh
bun create github.com/crumley/yoga-prisma-template ./YOUR_PROJECT
```

## Bun setup

```bash
cd YOUR_PROJECT
rtx trust
rtx install
direnv allow
bun install
```

## Database setup

```sh
docker compose up -d
bun prisma migrate dev --name init
```

## Running

```sh
bun run src/index.ts
```

## Testing

```sh
bun test
```