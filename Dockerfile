FROM node:19.0-alpine AS builder
WORKDIR /home
COPY ./package.json .
COPY ./package-lock.json .
COPY ./postcss.config.cjs .
COPY ./tailwind.config.cjs .
COPY ./tsconfig.json .
COPY ./img ./img
COPY ./public ./public
RUN npm i

COPY ./vite.config.ts .
COPY ./src ./src
RUN npm run build:release
#CMD ["node", "./dist/server.js"]
#EXPOSE 3000
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
COPY --from=builder /home/dist/public /usr/share/nginx/html
EXPOSE 8080