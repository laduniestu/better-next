## Contributing

If you find obvious issues with this starter kit, feel free to submit a pull request or submit and issue.

## How to Get Started

Start by clicking the "use this template" button on the github repo. We suggest creating a new repository so you can
track your code changes. After, clone your own repository down to your computer and start working on it.

### Prerequisites

This starter kit does use Docker Compose to run a postgres database, so you will need to have Docker
installed, or modify the project to point to a hosted database solution.

## How to Run

1. `cp .env.example .env`
2. `bun i`
3. `docker compose up`
4. `bunx prisma db push`
5. `bun run dev`
