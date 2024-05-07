FROM node:current-alpine3.19
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD [ "npm", "run", "build"]
CMD [ "npm", "start"]
