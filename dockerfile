# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Start the application
CMD ["npm", "start"]

# # Build the React application
# RUN npm run build

# # Install a simple static file server to serve the build output
# RUN npm install -g serve

# # Set the command to run the server
# CMD ["serve", "-s", "build"]

# # Expose port 3000
# EXPOSE 3000
