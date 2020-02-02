#!/bin/bash
set -eo pipefail

cd "$(dirname "$0")"

# Delete all existing codegen
rm -rf build

docker run \
  --rm \
  --tty \
  --volume $(pwd):$(pwd) \
  --workdir $(pwd) \
  java:8 /bin/sh \
  -c "./codegen.sh"
