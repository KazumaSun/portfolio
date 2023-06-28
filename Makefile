build:
	docker compose build

up:
	docker compose up

storybook:
	docker compose run --rm view sh -c "npm run storybook"

