FROM node:16.19.0-alpine3.17 as build
RUN apk update && apk upgrade 
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/main"]
