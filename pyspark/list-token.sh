#!/bin/bash

# Run the command and store the output
output=$(docker exec jupyter jupyter server list)

# Extract the token from the output (assuming it follows a specific format)
token=$(echo "$output" | grep -oP 'token=\K\S+')

# Print the token with a clickable link
echo "http://localhost:8888/?token=$token"
