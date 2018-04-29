#!/bin/bash



ENDPOINT="http://localhost:53942"


#!/usr/bin/env bash

GRAPHQL_FOLDER=.

PATH_TO_INPUT_SCHEMAS='http://localhost:53942'
PATH_TO_QUERIES=src/**/*query.graphql
PATH_TO_MERGED_SCHEMA=${GRAPHQL_FOLDER}/schema.graphql
PATH_TO_JSON_SCHEMA=${GRAPHQL_FOLDER}/schema.json

mkdir -p ${GRAPHQL_FOLDER}

# Merge all the schemas to one.
# This schema is also read by the server to provide definitions.

# Create a JSON representation of our schema.
./node_modules/.bin/apollo-codegen introspect-schema ${PATH_TO_INPUT_SCHEMAS} --output ${PATH_TO_JSON_SCHEMA}

# Generate flow types.
for file in $(find src -name "*query.graphql"); do
  echo ${file}
  ./node_modules/.bin/apollo-codegen generate ${file} \
      --schema ${PATH_TO_JSON_SCHEMA}  \
      --target flow \
      --output ${file}.types.js \
      --add-typename
done
