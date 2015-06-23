import 'core-js/shim';

import nunjucks from 'nunjucks';
import express from 'express';
import path from 'path';
import fs from 'fs';

const VIEWS_DIR = path.join(__dirname, 'views');
const ROUTES_DIR = path.join(__dirname, 'routes');
const STATIC_DIR = path.join(__dirname, '..', 'client', 'dist');

// Configure server and templating.
let app = express();
app.set('views', VIEWS_DIR);
app.set('view engine', 'html');
app.use(express.static(STATIC_DIR));

nunjucks.configure(VIEWS_DIR, {
  autoescape: true,
  express: app,
});

// Setup routes.
for ( let file of fs.readdirSync(ROUTES_DIR) ) {
  require(path.join(ROUTES_DIR, file))(app);
}

// Start the server.
let server = app.listen(process.env.PORT, () => {

  let { address, port } = server.address();
  console.log(`Server listening at http://${address}:${port}`);
});
