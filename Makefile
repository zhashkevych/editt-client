build:
	docker build . -t editt-client:0.1

run-container:
	./run-container.sh

run: build run-container