# Starter MERN App
As a form of project based learning I built my first website based around my personal hobby of hiking. This is a CRUD app with a REST API using a non-relational database to store user data.

# Project Description
This website allows users to plan hikes using an interactive map, along with a drop down and calendar function for various locations situated around Scotland. The user can add hikes, details about them and delete them.

# Project Aim
To personally pick up some basic knowledge around web development, Javascript, REST APIs and AWS. Javascript is not my preferred language.

# Structure of Project
- Frontend - React, Redux and Mapbox.
- Backend - Node Javascript and Express.
- Database - MongoDB.
- Deployment - EC2 on AWS (Ubuntu AMI) with use of NGINX and PM2.

# Flaws
- Auth Bearer Token stored on local storage - vulnerable to Cross-Site Scripting Attack (XSS).
- HTTPS not set up - only accessible through HTTP.

Although XSS possible I deceided since this website doesn't contain any sensitive data it will be suffice.

# Future Improvements
I am unlikely to add any improvements due to this being a starter project.

- Enable HTTPS.
- Store Auth Bearer Token more securely  - look into creating a session.
- Centre the map.
- Add a message board.
- Link clicking location on map to drop down list.

# How to install the project
Fork the code and use NPM build to add the dependency packages. Add a .ENV file to add Mongo Atlas connection details as well as unique key for authentication. After that NPM Start should to start the website on localhost/ local network.

# T&Cs
Add /termsconditions onto the website address

# Website Addresses
- http://3.10.213.186/login
- http://ec2-3-10-213-186.eu-west-2.compute.amazonaws.com/login
