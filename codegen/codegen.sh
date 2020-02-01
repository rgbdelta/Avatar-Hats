#!/bin/bash
set -eo pipefail

cd "$(dirname "$0")"

rm -rf build

for file in ./specs/*.yaml
do
  output=./build/$(basename ${file%.http.swagger.yaml}-sdk)
  java -jar openapi-generator-cli-4.2.3.jar generate \
    -g typescript-fetch \
    -i ./$file \
    -o $output &
done

wait
