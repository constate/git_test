import express from "express";
import http from "http";
const app = express();

console.log("nodejs server test");
app.get("/", (req, res) => {
  res.end("<h1>Hello world</h1>");
});

app.get("/car/input", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset" });
  res.write("<h2>자동차 정보 입력</h2>");
  res.end();
});

app.get("/car/list", (req, res) => {
  console.log("GET - /car/list 호출");
  res.writeHead(200, { "Content-Type": "text/html; charset" });
  res.write("<h2>자동차 목록</h2>");
  res.end();
});

const server = http.createServer(3000, () => {
  console.log("on server port 3000");
});
