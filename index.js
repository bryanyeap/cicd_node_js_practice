const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node.js app!' });
});

app.post('/data', express.json(), (req, res) => {
    res.json({ received: req.body });
    console.log('Data received:' , req.body);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
