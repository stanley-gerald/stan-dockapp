FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package configurations first to leverage layer caching
COPY package*.json ./

# Install dependencies (if any are added later)
RUN npm install

# Copy application code
COPY . .

EXPOSE 3000

# Run the app via the package.json script definition
CMD [ "node", "app.js" ]
