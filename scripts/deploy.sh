#!/bin/bash
functionName="desk2web-api"

echo "packaging lambda, creating new zip..."
rm -rf lambda-dist.zip
rm -rf lambda-dist
mkdir lambda-dist

cp dist/lambda.js ./lambda-dist/
cp -r dist/lib ./lambda-dist/lib

echo "npm install production dependencies..."
(cd lambda-dist; npm install --production > /dev/null) || exit 1

echo "generating zip archive..."
(cd lambda-dist; zip -r ../lambda-dist.zip * > /dev/null) || exit 1

echo "uploading new zip to lambda..."
node scripts/update-function-code.js $functionName
