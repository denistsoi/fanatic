const fanatic = require('./fanatic');

(async () => {
  console.log("Start of program --- ", new Date())
  await fanatic({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  console.log("end program")
})();