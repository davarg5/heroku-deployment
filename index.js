// at the top of index.js
const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;

console.log('web 36 rocks');
console.log(__dirname);

console.log(process.env.USERNAME);
console.log(process.env.PORT);
console.log(process.env.LADY);

const app = express();
app.use(cors());
app.use(express.json);

app.use('/api/*', (_, res) => {
    res.json({ data: 'web 36 rocks' })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
