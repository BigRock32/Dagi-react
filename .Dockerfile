FROM node:16 AS build

WORKDIR /dagi-react

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /dagi-react/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf