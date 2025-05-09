FROM node:lts-alpine3.21

WORKDIR /app

COPY . .

RUN npm install

RUN npm run db:generate

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
