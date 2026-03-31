FROM node:25-alpine3.22
WORKDIR /app
COPY . /app
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
 
