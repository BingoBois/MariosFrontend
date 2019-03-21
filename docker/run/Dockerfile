# 1 - Build
FROM node:8.15.1-jessie as build-deps
RUN apt update -y && apt install libxss1 git -y
RUN git clone https://github.com/BingoBois/MariosFrontend.git /root/mario
WORKDIR /root/mario
RUN npm install
RUN npm run build

# 2 - Nginx
FROM nginx:1.15.9
COPY --from=build-deps /root/mario/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
