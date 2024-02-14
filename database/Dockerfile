FROM mongo:latest

# Set default MongoDB password
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password

# Expose MongoDB port
EXPOSE 27017

# Copy initialization script to the container
COPY init.js /docker-entrypoint-initdb.d/
