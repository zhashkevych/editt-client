build:
	docker build . -t editt-client:0.1

run: build
	docker stop editt-client
	docker run --rm -d --publish 80:80 --network editt --name editt-client editt-client:0.1