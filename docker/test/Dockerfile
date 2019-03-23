# 1 - Build
FROM node:8.15.1-jessie as build-deps
RUN apt update -y && apt install libxss1 git dos2unix -y
RUN git clone https://github.com/BingoBois/MariosFrontend.git /root/mario
WORKDIR /root/mario
RUN npm install
COPY run.sh /root/mario
RUN chmod 755 /root/mario/run.sh
RUN dos2unix /root/mario/run.sh
CMD /root/mario/run.sh
