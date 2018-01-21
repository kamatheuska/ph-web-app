const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.static('src'));

// app.get('/', (req, res) => {
//   res.send({
//     name:' Kameush'
//   });
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/client/dist/index.html');
// });

app.get('/api/test', (req, res) => {
  res.send({
    name: "Kameush",
    msg: "is the best name ever, and you know it"

  });
});


app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});