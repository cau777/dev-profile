FROM node:18.12.1-slim AS builder
WORKDIR /home
COPY ./package.json .
COPY ./postcss.config.cjs .
COPY ./tailwind.config.cjs .
COPY ./tsconfig.json .
COPY ./vite.config.ts .
COPY ./img ./img
COPY ./public ./public
RUN npm i

COPY ./src ./src
RUN npm run build:release

FROM nginx:1.12-alpine
RUN echo "events {  \
  worker_connections 1024;  \
} \
http {  \
  include mime.types;  \
  sendfile on; \
  server {  \
    listen 8080;  \
    proxy_set_header Host $host; \
    resolver 127.0.0.11;  \
    autoindex off;  \
    server_name caua-rinaldi.dev;  \
    root /usr/share/nginx/html;  \
    server_tokens off;  \
    gzip_static on;  \
  } \
}" > /etc/nginx/nginx.conf
COPY --from=builder /home/dist/public /usr/share/nginx/html
EXPOSE 8080