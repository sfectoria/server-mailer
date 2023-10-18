deploy:
	@yarn
	@yarn build
	@pm2 start "yarn start:prod" --name api
