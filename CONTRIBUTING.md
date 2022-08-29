# Project Info

First of all, thank you everyone who made pull requests for Uptime Kuma, I never thought GitHub Community can be that nice! And also because of this, I also never thought other people actually read my code and edit my code. It is not structured and commented so well, lol. Sorry about that.

The project was created with vite.js (vue3). Then I created a subdirectory called "server" for server part. Both frontend and backend share the same package.json.

The frontend code build into "dist" directory. The server (express.js) exposes the "dist" directory as root of the endpoint. This is how production is working.

## Key Technical Skills

- Node.js (You should know what are promise, async/await and arrow function etc.)
- Socket.io
- SCSS
- Vue.js
- Bootstrap
- SQLite

## Directories

- data (App data)
- dist (Frontend build)
- extra (Extra useful scripts)
- public (Frontend resources for dev only)
- server (Server source code)
- src (Frontend source code)
- test (unit test)

## Can I create a pull request for Uptime Kuma?

Yes, you can. However, since I don't want to waste your time, be sure to **create empty draft pull request, so we can discuss first** if it is a large pull request or you don't know it will be merged or not.

Also, please don't rush or ask for ETA, because I have to understand the pull request, make sure it is no breaking changes and stick to my vision of this project, especially for large pull requests.

I will mark your pull request in the [milestones](https://github.com/louislam/uptime-kuma/milestones), if I am plan to review and merge it.

✅ Accept:
- Bug/Security fix
- Translations
- Adding notification providers

⚠️ Discussion First
- Large pull requests
- New features

❌ Won't Merge
- Do not pass auto test
- Any breaking changes
- Duplicated pull request
- Buggy
- Existing logic is completely modified or deleted for no reason
- A function that is completely out of scope


### Recommended Pull Request Guideline

Before deep into coding, discussion first is preferred. Creating an empty pull request for discussion would be recommended.

1. Fork the project
1. Clone your fork repo to local
1. Create a new branch
1. Create an empty commit
   `git commit -m "[empty commit] pull request for <YOUR TASK NAME>" --allow-empty`
1. Push to your fork repo
1. Create a pull request: https://github.com/louislam/uptime-kuma/compare
1. Write a proper description
1. Click "Change to draft"
1. Discussion

## Project Styles

I personally do not like something need to learn so much and need to config so much before you can finally start the app.

- Easy to install for non-Docker users, no native build dependency is needed (at least for x86_64), no extra config, no extra effort to get it run
- Single container for Docker users, no very complex docker-compose file. Just map the volume and expose the port, then good to go
- Settings should be configurable in the frontend. Environment variable is not encouraged, unless it is related to startup such as `DATA_DIR`.
- Easy to use
- The web UI styling should be consistent and nice.

## Coding Styles

- 4 spaces indentation
- Follow `.editorconfig`
- Follow ESLint
- Methods and functions should be documented with JSDoc

## Name convention

- Javascript/Typescript: camelCaseType
- SQLite: snake_case (Underscore)
- CSS/SCSS: kebab-case (Dash)

## Tools

- Node.js >= 14
- NPM >= 8.5
- Git
- IDE that supports ESLint and EditorConfig (I am using IntelliJ IDEA)
- A SQLite GUI tool (SQLite Expert Personal is suggested)

## Install dependencies

```bash
npm ci
```

## Dev Server

(2022-04-26 Update)

We can start the frontend dev server and the backend dev server in one command.

Port `3000` and port `3001` will be used.

```bash
npm run dev
```

## Backend Server

It binds to `0.0.0.0:3001` by default.


It is mainly a socket.io app + express.js.

express.js is used for: 
- entry point such as redirecting to a status page or the dashboard
- serving the frontend built files (index.html, .js and .css etc.)
- serving internal APIs of status page


### Structure in /server/

- model/ (Object model, auto mapping to the database table name)
- modules/ (Modified 3rd-party modules)
- notification-providers/ (individual notification logic)
- routers/ (Express Routers)
- socket-handler (Socket.io Handlers)
- server.js (Server entry point and main logic)

## Frontend Dev Server

It binds to `0.0.0.0:3000` by default. Frontend dev server is used for development only. 

For production, it is not used. It will be compiled to `dist` directory instead. 

You can use Vue.js devtools Chrome extension for debugging.

### Build the frontend

```bash
npm run build
```

### Frontend Details

Uptime Kuma Frontend is a single page application (SPA). Most paths are handled by Vue Router.

The router is in `src/router.js`

As you can see, most data in frontend is stored in root level, even though you changed the current router to any other pages.

The data and socket logic are in `src/mixins/socket.js`.

## Database Migration

1. Create `patch-{name}.sql` in `./db/`
2. Add your patch filename in the `patchList` list in `./server/database.js`

## Unit Test

It is an end-to-end testing. It is using Jest and Puppeteer.

```bash
npm run build
npm test
```

By default, the Chromium window will be shown up during the test. Specifying `HEADLESS_TEST=1` for terminal environments.

## Update Dependencies

Install `ncu`
https://github.com/raineorshine/npm-check-updates

```bash
ncu -u -t patch
npm install
```

Since previously updating Vite 2.5.10 to 2.6.0 broke the application completely, from now on, it should update patch release version only.

Patch release = the third digit ([Semantic Versioning](https://semver.org/))

## Translations

Please read: https://github.com/louislam/uptime-kuma/tree/master/src/languages

## Wiki

Since there is no way to make a pull request to wiki's repo, I have set up another repo to do that.

https://github.com/louislam/uptime-kuma-wiki

## Maintainer

Check the latest issues and pull requests:
https://github.com/louislam/uptime-kuma/issues?q=sort%3Aupdated-desc

### Release Procedures

1. Draft a release note
2. Make sure the repo is cleared
3. `npm run release-final with env vars: `VERSION` and `GITHUB_TOKEN`
4. Wait until the `Press any key to continue`
5. `git push`
6. Publish the release note as 1.X.X 
7. Press any key to continue
8. SSH to demo site server and update to 1.X.X

Checking:

- Check all tags is fine on https://hub.docker.com/r/louislam/uptime-kuma/tags
- Try the Docker image with tag 1.X.X (Clean install / amd64 / arm64 / armv7)
- Try clean installation with Node.js

### Release Beta Procedures

1. Draft a release note, check "This is a pre-release"
2. Make sure the repo is cleared
3. `npm run release-beta` with env vars: `VERSION` and `GITHUB_TOKEN`
4. Wait until the `Press any key to continue`
5. Publish the release note as 1.X.X-beta.X
6. Press any key to continue

### Release Wiki

#### Setup Repo

```bash
git clone https://github.com/louislam/uptime-kuma-wiki.git
cd uptime-kuma-wiki
git remote add production https://github.com/louislam/uptime-kuma.wiki.git
```

#### Push to Production Wiki

```bash
git pull
git push production master
```
