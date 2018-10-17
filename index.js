const fanatic = require('./fanatic');

(async () => {
  console.log("Start of program --- ", new Date())
  await fanatic({ headless: false });
  console.log("end program")
})();