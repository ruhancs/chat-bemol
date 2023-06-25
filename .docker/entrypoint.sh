#!/bin/sh

cd client-bemol-chat
npm install
cd ..
cd let-me-help-bemol
npm install
npm run build
npm install prisma --save-dev
cd ..
npm run start:docker