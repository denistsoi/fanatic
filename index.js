const fanatic = require('./fanatic');

(async () => {
  console.log("Start of program --- ", new Date())
  await fanatic({ headless: true });
  console.log("end program")
})();