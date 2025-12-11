#!/usr/bin/env sh
# abort on errors
set -e
# build
pnpm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'thisisalberto.dev' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:dawalberto/thisisalberto.git main:gh-pages
cd -