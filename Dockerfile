# need an OS to run my api
FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

# install node and npm
RUN yarn install

# copy all files to this OS
COPY . .

# build api
RUN yarn build

EXPOSE 3000

# run the app
CMD ["yarn", "start"]

