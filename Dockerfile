FROM node:14.21.3-alpine3.17

COPY  . .

RUN npm i -y

RUN npm build

CMD ["npm", "run", "dev"]