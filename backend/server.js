const express = require('express');
const app = express(); 
PORT = 4000;

app.use(express.json());

let data = ['กะปิ'];

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><input/>');
});

app.get('/snacklist', (req, res) => {
    res.send('รายการขนม: ข้าวเกรียบ, ลูกอม, ช็อกโกแลต!');
});

app.get(`/api/data`, (req, res) => {
    console.log('this one was for data');
    res.json(data);
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
}); 