# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the application runs on
EXPOSE 3001

# Run the database migrations and then start the application
CMD ["sh", "-c", "npm run migration-up && npm start"]
