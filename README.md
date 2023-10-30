# Testing WebSoket with Node and Express

initialize project with node
install express
```
npm init -y
npm install express -E
npm install morgan -E
npm install socket.io -E
npm install dotenv -E
```

add to package.json
```
"script": {
  "dev": "node --watch ./server/index.js",
  ...
}
```

run server
```
npm run dev
```