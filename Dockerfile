FROM ubuntu:20.04

RUN apt-get update -y

RUN apt-get install -y libgconf-2-4
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y python3-pip
RUN apt-get install -y python3-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app
