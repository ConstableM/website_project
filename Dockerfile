# Use node:latest as the builder image
FROM node:latest AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install app dependencies
COPY package.json .
RUN npm install

# Copy other project files and build
COPY . ./
RUN npm run build


# Copy the 'js' folder into the 'dist' folder
# This assumes 'dist' is the output directory for the build
COPY js ./dist/js