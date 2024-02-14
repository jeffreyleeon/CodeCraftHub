// init.js

// Connect to the admin database
var admin = db.getSiblingDB('admin');

// Create the local database
admin = db.getSiblingDB('local');

// Create a collection in the local database (optional)
admin.createCollection('myCollection');

// Exit the script
quit();
