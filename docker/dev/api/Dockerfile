FROM node:19

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY docker/dev/api/package*.json ./

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY docker/dev/api/ .

EXPOSE 8080

CMD [ "node", "server.js" ]
