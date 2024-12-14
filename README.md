
## Contributing
If you find obvious issues with this starter kit, feel free to submit a pull request or submit and issue.


## Features
- Responsive Landing Page
- Credentials Authentication
- Email Verification ⏳
- OAuth (Google, Github) ⏳
- Magic Link ⏳
- Email OTP ⏳
- [Admin Role](https://www.better-auth.com/docs/plugins/admin) ⏳

⏳: Coming Soon

## Technologies
- ⚡ Bun
- 🗃️ Postgres with PrismaORM
- 💅🏼 Shadcn/ui
- ✔︎ Typescript
- 🦋 Prettier

## How to Get Started
Start by clicking the "use this template" button on the github repo. We suggest creating a new repository so you can
track your code changes. After, clone your own repository down to your computer and start working on it.

## Prerequisites
This starter kit does use Docker Compose to run a postgres database, so you will need to have Docker
installed, or modify the project to point to a hosted database solution.

## How to Run
```bash
cp .env.example .env
bun i
docker compose up
bunx prisma db push
bun run dev
```

## License
Licensed under the [MIT license](https://github.com/laduniestu/nextjs-betterauth-starterkit/blob/main/LICENSE), so feel free to tweak, share, and remix as long as you give the proper shout-out!
