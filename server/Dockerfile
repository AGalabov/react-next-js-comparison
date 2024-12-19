FROM node:18-alpine

COPY ./package.json ./package-lock.json ./index.ts ./
RUN npm ci

CMD ["npm", "start"]
