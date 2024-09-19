# portfolio

## Start up
```
docker compose build
docker compose run --rm view sh -c "npx create-next-app . --ts"
docker compose run --rm view sh -c "npm init @eslint/config"
docker compose run --rm view sh -c "npm install --save-dev prettier eslint-config-prettier"
docker compose run --rm view sh -c "npx storybook init"
```