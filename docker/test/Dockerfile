# 1 - Build
FROM node:8.15.1-jessie as build-deps
RUN apt update -y && apt install libxss1 git -y
RUN git clone https://github.com/BingoBois/MariosFrontend.git /root
WORKDIR /root
RUN npm start &
RUN npm test
