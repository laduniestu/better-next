FROM oven/bun:alpine AS base

# Step 1 - install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
COPY prisma ./prisma
RUN bun install --frozen-lockfile

# Step 2 - rebuild the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Step 3 - copy all the files and run server
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "run", "server.js"]