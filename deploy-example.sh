#!/bin/sh

# Path to repo parent folder (No trailing slash!)
repopath="$HOME/path/to/repo/mtg-settle"

# Path to where the server serves built pages (No trailing slash!)
livepath="/var/www/mtg-settle"




### SCRIPT ###

set -e
cd "$repopath"

# Update
echo
echo " *** UPDATING CLIENT *** "
git pull
npm install
npm update

# Build
npm run build

# Deploy
echo
echo " *** DEPLOYING CLIENT *** "
if [ -d "$livepath" ]; then
    mv -f "$livepath" "$livepath-old"
    echo "> Old client backed up: $livepath-old"
else
    echo "> Old client not found"
fi

cp -a "$repopath/build" "$livepath" && echo "> New client build is live."