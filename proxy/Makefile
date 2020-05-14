dk=docker-compose
dkr_php=${dk} run --rm proxy

start:
	${dk} up -d proxy

stop:
	${dk} down --remove-orphan

restart: stop start
