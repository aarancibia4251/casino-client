FROM node:18.20.0-alpine
LABEL authors="aarancis"

EXPOSE 7090

RUN apk add --update tini
WORKDIR '/app'

COPY ./package.json ./

RUN npm install

COPY . .

# Serve files on port 3000
CMD ["npm", "start"]
