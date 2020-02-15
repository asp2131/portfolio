FROM node:10

RUN mkdir -p /usr/Tune/
WORKDIR /

COPY package*.json /usr/Tune/
RUN npm install

EXPOSE 8080

COPY . .
CMD ["npm", "start"]