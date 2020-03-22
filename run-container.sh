if [ "$(docker ps -q -f name=editt-client)" ]; then
    if [ ! "$(docker ps -aq -f status=exited -f name=editt-client)" ]; then
        docker stop editt-client
    fi
    docker run --rm -d --publish 80:80 --network editt --name editt-client editt-client:0.1
fi