const httpProxy = require('http-proxy');
const fs = require('fs');

httpProxy.createServer({
  ssl: {
    key: fs.readFileSync('./cert/key.pem', 'utf8'),
    cert: fs.readFileSync('./cert/crt.pem', 'utf8'),
  },
  target: 'https://www.baidu.com',
  changeOrigin: true,
  secure: true, // Depends on your needs, could be false.
}).listen(8877);
