const express = require ('express');
const fs = require ('fs');
const app = express ();
//const handler = require ('./handler');
const cart = require('./cartRouter');

app.use (express.json ()); //Определение JSON
app.use ('/', express.static ('public'));
app.use ('/api/cart', cart);

app.get ('/api/products', (req, res) => {
    fs.readFile ('server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send (data);
        }
    })
});



app.listen (3000, () => ('listening at port 3000...'));



//В экспрессе мы получаем особые методы отлова запросов
//
// app.get ();
// app.post ();
// app.put ();
// app.delete ();