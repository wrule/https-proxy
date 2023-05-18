import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

function main() {
  const proxyApp = express();
  const proxyServer = http.createServer(proxyApp);

  proxyApp.use('/', createProxyMiddleware({
    target: '/',
    changeOrigin: true,
    router: (req) => {
      console.log(req.url);
      const url = new URL(req.url);
      const dstRoute = `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
      return dstRoute;
    },
  }));

  proxyServer.listen(7070);
  console.log('7070...');
}

main();
