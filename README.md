# Flygility App started for my personal project for Dev Academy.

The aim is to make an app for flygility competitions (a sport where two dogs race head-to-head to get a tennis ball and bring it back to their handler while accurately naivgating obstacles like tunnels and jumps).

In the app you will be able:
1. Create a tournament
2. Create poster for the tournament that can be downloaded as an image to share on social media
3. Edit/delete the event
4. Participants can enter their dogs in the tournament with entry fees calculated
5. A tournament draw created that matches dogs up to race
6. Input results live to see which doggs and competing next
7. Finalise results, send them out to competitors and the national organisation
8. Users can have their own login to track their dogs results, add/update their dogs, club details, shows they have entered, and results from past shows.
9. People can find out about flygility as a sport

Tech goals: Practice React, Redux, database, internal API's, creating forms.



# Boilerplate Details:
# Boilerplate: React with Webpack
This is a starter project that uses webpack to transpile and bundle ES6 React code. 

## Setup

### Installation
To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

---

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)
