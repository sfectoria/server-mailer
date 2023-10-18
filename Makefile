deploy:
	@yarn
	@yarn build
	@pm2 start "yarn start:prod" --name server-mailer-sfectoria
