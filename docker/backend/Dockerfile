# 1 - Build
FROM node:8.15.1-jessie as build-deps
RUN apt update -y && apt install libxss1 git -y
RUN git clone https://github.com/BingoBois/MariosBackend.git /root/mario
WORKDIR /root/mario
RUN npm i -g typescript
RUN npm install
CMD npm start
