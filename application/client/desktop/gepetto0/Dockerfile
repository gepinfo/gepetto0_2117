FROM node:14.11.0-alpine
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install --save @ng-select/ng-select
RUN npm install -g @angular/cli
RUN npm install -g serve
RUN npm install -g concurrently
RUN npm upgrade -g @angular/cli
CMD ng build  --output-hashing all && concurrently "ng build --watch" "serve dist/gepetto0"
EXPOSE 5000
