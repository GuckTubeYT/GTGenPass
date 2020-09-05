const bcrypt = require('bcrypt')
const readline = require("readline");

const rounds = 12
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter the Password: ", function(passgen) {
bcrypt.hash(passgen, rounds, (err, hash) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("\nPassword: " + passgen)
  console.log("Hash Password: " + hash)
  return;
})
})
