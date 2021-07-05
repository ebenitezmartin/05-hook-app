# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install --save-dev react-scripts@3.4.1
RUN npm install --save-dev react@16.13.1 --force
RUN npm install --save-dev react-test-renderer@16.8.0 --force
RUN npm install --save-dev react-dom@16.13.1 --force
RUN npm install --save-dev webpack@4.42.0 
RUN npm install --save-dev enzyme enzyme-adapter-react-16
RUN npm install --save-dev enzyme-to-json
RUN npm install --save-dev react-router-dom


# add app
COPY . ./

# start app
CMD ["npm", "start"]    