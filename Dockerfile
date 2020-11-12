FROM node:12.19.0-alpine

WORKDIR /usr/src

RUN yarn global add npm@6.14.8
RUN yarn global add typescript@4.0.2
RUN yarn global add @angular/cli

COPY . ./app

WORKDIR /usr/src/app

RUN yarn install
RUN yarn build --configuration=production

EXPOSE 4200

CMD yarn start --host 0.0.0.0