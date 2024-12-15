FROM imbios/bun-node:18-slim AS base

WORKDIR /app

COPY package.json bun.lockb ./
COPY prisma ./prisma

RUN bun install --frozen-lockfile

FROM base AS builder
COPY . .
RUN bun prisma generate
RUN bun run build

FROM node:18-slim AS runner
WORKDIR /app

ARG CONFIG_FILE
COPY $CONFIG_FILE /app/.env

COPY --from=builder  /app/.next/standalone ./

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]