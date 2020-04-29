#!/usr/bin/env bash
npm install
npm run build
pm2-runtime npm -- start
pm2-runtime node redisServer
