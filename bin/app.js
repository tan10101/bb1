#!/usr/bin/env node

const program = require('commander');
const api = require('..');

program
  .option('-H, --host <host>', 'specify the host [0.0.0.0]', '0.0.0.0')
  .option('-p, --port <port>', 'specify the port [4000]', '4000')
  .option('-b, --backlog <size>', 'specify the backlog size [511]', '511')
  .option('-r, --ratelimit <n>', 'ratelimit requests [2500]', '2500')
  .option('-d, --ratelimit-duration <ms>', 'ratelimit duration [1h]', '1h')
  .parse(process.argv);

// create app

const app = api({
  ratelimit: ~~program.ratelimit,
  duration: ~~program.ratelimitDuration
});

app.listen(program.port, program.host, ~~program.backlog);
console.log('Listening on %s:%s', program.host, program.port);

