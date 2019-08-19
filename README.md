# websockets-chat-app

A live chat application

[Click here to view a live-demo](https://websockets-chat-app.herokuapp.com/)

## Overview
Send and receive messages in real time using websockets. Create chat rooms with multiple connected users.

## Usage and Installation
### Installation
1) Clone the repo using git CLI
```sh
$ git clone https://github.com/jaydenhinrichsen/websockets-chat-app.git
```
2) While in the *root* directory of the project
```sh
$ npm install
$ npm run client-install
```
### Running Locally
2) While in the *root* directory of the project
```sh
$ npm run dev
```

## Technologies Used
* Node.js
* Express
* React
* Bulma/Bloomer UI library
* Node-sass
* Socket.io

## Improvements & Future Features
* Optimize the data that is transfered through socket connections for improved scalabilty and performance
* Link a database to store users, chats, and messages, for persistent data storage
* Add notifications -> when a room a user has joined receives an event, notify the user via a notification
* Add authentication, user registration/login
* Implement Redux for global state management
