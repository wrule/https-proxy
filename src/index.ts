import fs from 'fs';
import http from 'http';
import https from 'https';
import httpProxy from 'http-proxy';

httpProxy.createServer({
  ssl: {
    key: fs.readFileSync('./cert/key.pem', 'utf8'),
    cert: fs.readFileSync('./cert/crt.pem', 'utf8'),
  },
  target: 'https://www.baidu.com/',
  changeOrigin: true,
  secure: true,
}).listen(8877);
