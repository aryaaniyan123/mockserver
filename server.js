const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
var db = require('./db.json');

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/result': '/result'
}));

server.post('/post/messages', (req, res) => {
  if (req.method === 'POST') {
    let ticketId = req.body['ticketId'];
    if (ticketId != null && ticketId >= 0) {
      let result = db.messages.find(message => {
        return message.ticketId == ticketId;
      })

      if (result) {
        let {id, ...message} = result;
        res.status(200).jsonp(message);
      } else {
        res.status(400).jsonp({
          error: "Bad ticketId"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid ticketId"
      });
    }
  }
});

server.use(router);
server.listen(port);
