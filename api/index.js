import { Readable } from 'stream';
import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['host'];
    const fullUrl = `${proto}://${host}${req.url}`;

    const init = {
      method: req.method,
      headers: req.headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = req;
      init.duplex = 'half';
    }

    const webRequest = new Request(fullUrl, init);
    const webResponse = await server.fetch(webRequest);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      // Skip content-encoding to let Vercel handle compression automatically
      if (key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });

    if (webResponse.body) {
      Readable.fromWeb(webResponse.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Error in Vercel SSR handler:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
