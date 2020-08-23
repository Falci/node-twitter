FROM node:12

RUN apt-get update
RUN apt-get install dnsutils -y

WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3000

CMD [ "node", "server.js" ]