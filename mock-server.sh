#!/usr/local/bin sh

cd ..
mkdir lucy-in-the-sky-server
cd lucy-in-the-sky-server
git clone https://github.com/dkaledin/mock-server.git
cd mock-server
yarn install && yarn start
