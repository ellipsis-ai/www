FROM node:11

RUN apt-get update -qq
RUN apt-get install -y build-essential

ENV APP_HOME /www
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN apt-get install -y python python-dev python-pip
RUN pip install awscli

EXPOSE 4000
