const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/copy', (req, res) => {
    const { text } = req.body;
    console.log('Copied text:', text);
    res.status(200).send({ message: 'Text copied successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
