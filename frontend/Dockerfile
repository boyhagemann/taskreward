FROM ubuntu:latest

# We need curl to download packages
RUN apt-get update && apt-get install curl -y

# Get thee node package
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -

# Get the Yarn package
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install dependencies in one go and clear the cached list
# to keep the image size small
RUN apt-get update && apt-get install -y \
    yarn \
    nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /data

EXPOSE 4000

CMD ["yarn", "start"]
