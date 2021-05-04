FROM node:14
RUN mkdir /opt/app
ADD ./ /opt/app
WORKDIR /opt/app
CMD ["sh","-c", "yarn install && yarn build && yarn run start"]