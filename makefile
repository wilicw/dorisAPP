build:
	ng build --prod --base-href /dorisAPP/
	gh-pages -d dist
