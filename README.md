# 🚨 Archived Repository

![Status: Archived](https://img.shields.io/badge/status-archived-red.svg)

Thank you to everyone who used and ⭐ starred this repository 🙏.  
This project is now **archived** because I’ve created a new and improved **starter kit** that replaces it.

## Why archived?
- This codebase has been superseded by a newer starter kit.
- The new project includes better structure, updated dependencies, and long-term maintenance.

## New Starter Kit
👉 Please use the new repository here: [NextStart](https://github.com/laduniestu/nextstart)

## Notes
- The code here is still available for reference but will no longer be updated.
- No further issues, pull requests, or security updates will be accepted.

---

Once again, thank you for all the support ❤️

---------------
# The Perfect Next.js Starter Kit
This Next.js starter kit includes everything you need to build your awesome product. From authentication to analytics, it's everything you need to launch your project.

![Screenshot](src/app/(public)/(home)/_components/hero-dark.jpg)

## Features
- 💫 Modern UI/UX : Responsive Landing & Dashboard Page
- 💯️ Fully Type-safe : Typescript, Zod
- 🔐 Authentication : Email & Password, more soon...
- 📊 Analytics : Event trigger, Page view
- 🙎🏼‍♂️ Admin Role: ⏳ coming-soon
- 💸 Payment : ⏳ coming-soon


## Tech Stack
- Framework : [Next.js 15](https://github.com/vercel/next.js)
- Database : [PostgreSQL](https://github.com/postgres/postgres) using Docker
- ORM : [Prisma ORM](https://github.com/prisma/prisma)
- Forms : [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- Styling : [TailwindCSS](https://github.com/tailwindlabs/tailwindcss), [Shadcn/UI](https://github.com/shadcn-ui/ui), [ReactIcons](https://github.com/react-icons/react-icons)
- Dev Tools : [T3-Env](https://github.com/t3-oss/t3-env), [Prettier](https://github.com/prettier/prettier)
- Validation : [Zod](https://github.com/colinhacks/zod)
- Authentication : [Better-auth](https://github.com/better-auth/better-auth)
- Analytics : [Umami](https://github.com/umami-software/umami)
- Email : ⏳ coming-soon

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
docker compose up -d
bunx prisma db push
bun run dev
```

## Roadmap

- [x] Credentials Authentication
- [x] Protected Routes
- [x] Dark/Light Mode
- [x] Landing Page
- [x] User Dashboard
- [x] Update Profile
- [x] Change Email
- [x] Change Password
- [x] Delete Account
- [x] Analytics

- [ ] Require Email Verification
- [ ] Reset Password
- [ ] Email Verification for Delete Account
- [ ] Email Verification for Change Email
- [ ] OAuth (Github, Google)
- [ ] Magic Link
- [ ] Email OTP
- [ ] Admin
- [ ] Admin Dashboard
- [ ] Upload profile avatar

## Contributing
If you find obvious issues with this starter kit, feel free to submit a pull request or submit and issue.
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Submit a Pull Request.



## License
Licensed under the [MIT license](https://github.com/laduniestu/nextjs-betterauth-starterkit/blob/main/LICENSE), so feel free to tweak, share, and remix as long as you give the proper shout-out!
