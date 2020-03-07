# WeChat

A live chat application with authentication.

[Click here to view a live-demo](https://websockets-chat-app.herokuapp.com/)
![](wechat-demo.gif)

## Overview
WeChat is a simple chat application built using Socket.io, ReactJS, Redux, Nodejs, and MongoDB allowing users to signup/signin and create 'chat rooms'. These chat rooms can have multiple users sending and receiving messages in real time. These messages are then saved to a MongoDB database and retreived when a user first joins a chat room. 

## Project Goals
 * Gain a deeper understand of how websockets interact with React
 * Implement an authentication strategy using json webtokens
 * Create the UI without the help of a framework to push my CSS skills further
 
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
* Node-sass
* Socket.io
* Redux

## Improvements, Fixes, & Future Features
* Refactor class based components into functional components.
* Refactor the socket controller and clean up the server side code/folder structure.
* Fix issue with the same person being added to a room more than once.


