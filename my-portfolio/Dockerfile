From node:18.17.1 as build

WORK /app

COPY package*.json .
RUN npm install
COPY . .
Run npm run build

From nginx
