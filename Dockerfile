FROM node:22.0-alpine AS builder
WORKDIR /home
COPY ./package.json .
COPY ./package-lock.json .
COPY ./postcss.config.cjs .
COPY ./index.html .
COPY ./tsconfig.json .
COPY ./tsconfig.node.json .
COPY ./public ./public
RUN npm i

COPY ./vite.config.ts .
COPY ./src ./src
RUN npm run build

FROM nginx:1.12-alpine
RUN echo "events {  \
  worker_connections 1024;  \
} \
http {  \
  include mime.types;  \
  sendfile on; \
  server {  \
    listen 8080; \
    resolver 127.0.0.11;  \
    autoindex off;  \
    server_name caua-rinaldi.dev;  \
    absolute_redirect off; \
    root /usr/share/nginx/html;  \
    server_tokens off;  \
    gzip_static on; \
    \
    location / { \
      try_files \$uri \$uri/ =404; \
    } \
  } \
}" > /etc/nginx/nginx.conf
COPY --from=builder /home/dist /usr/share/nginx/html
EXPOSE 8080