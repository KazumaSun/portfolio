build:
	docker compose build

up:
	docker compose up

storybook:
	docker compose run -p 6006:6006 --rm view sh -c "npm run storybook"

