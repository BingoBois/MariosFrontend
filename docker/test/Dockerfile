# 1 - Build
FROM node:8.15.1-jessie as build-deps
RUN apt update -y && apt install libxss1 git dos2unix -y
RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libcairo2 libcups2 libfontconfig1 libgdk-pixbuf2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libxss1 fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
RUN git clone https://github.com/BingoBois/MariosFrontend.git /root/mario
WORKDIR /root/mario
RUN npm install
COPY run.sh /root/mario
RUN chmod 755 /root/mario/run.sh
RUN dos2unix /root/mario/run.sh
CMD /root/mario/run.sh
