FROM node:10.15.0 as build

RUN mkdir /usr/local/app

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build


FROM nginx:latest

COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html

EXPOSE 80