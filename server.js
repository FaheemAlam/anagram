const dotenv = require('dotenv');
dotenv.config();
var expressApp = require('./app')
const app = expressApp.app
/**
 * Start Express server.
 */
;(() => {
  const server = app.listen(app.get('port'), () => {
    console.info(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.info('Press CTRL-C to stop');
  });
  return server;
})();
