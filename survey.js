const { profile } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.question('What do you think of ? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);rl.close();})

// });
let paragraph = "";
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  paragraph += `your nickname is ${answer}, `;
  rl.question("What's an activity you like doing?", (answer) => {
    paragraph += `you like doing ${answer},`;

    rl.question("What do you listen to while doing that?", (answer) => {
      paragraph += `you like listening to ${answer}, `;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        paragraph += `you favourite meal is ${answer}, `;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          paragraph += `you like eating ${answer} mostly, `;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            paragraph += `you favourite sport is ${answer}, `;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              paragraph += `you are amazing at ${answer}.`;
              console.log(paragraph);
              rl.close();

            })
          })
        })
      })
    })
  })

});