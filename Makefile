build:
	docker build --no-cache . -t editt-client:0.1

run-container:
	./run-container.sh

run: build run-container
