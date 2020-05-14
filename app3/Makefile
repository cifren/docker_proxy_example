dk=docker-compose
dkr_php=${dk} run --rm web

start:
	${dk} up -d web

stop:
	${dk} down --remove-orphan

restart: stop start

logs:
	${dk} logs web
