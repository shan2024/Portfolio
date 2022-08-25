import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../components/App";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  //const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.get("/about", (req, res) => {
  //const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.get("/projects", (req, res) => {
  //const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});
server.listen(4332, () => console.log("Server is running..."));