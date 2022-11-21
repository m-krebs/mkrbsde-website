FROM node:lts as runner
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 80 
CMD [ "node", "index.js" ]
