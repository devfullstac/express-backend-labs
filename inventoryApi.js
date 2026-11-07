const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
var inventory = [];


app.post('/items', function (req, res) {
    var name = req.body.name;
    var quantity = req.body.quantity;

    var newItem = {
        id: Date.now(),
        name: name,
        quantity: quantity
    };

    inventory.push(newItem);
    res.status(201).json(newItem);
});


app.get('/items', function (req, res) {
    res.json(inventory);
});


app.put('/items/:id', function (req, res) {
    var itemId = parseInt(req.params.id);
    var item = inventory.find(function (i) { return i.id === itemId; });

    if (!item) {
        return res.status(404).json({ error: "Item not found!" });
    }

    item.quantity = req.body.quantity;
    res.json(item);
});


app.delete('/items/:id', function (req, res) {
    var itemId = parseInt(req.params.id);
    var itemIndex = inventory.findIndex(function (i) { return i.id === itemId; });

    if (itemIndex === -1) {
        return res.status(404).json({ error: "Item not found!" });
    }

    inventory.splice(itemIndex, 1);
    res.json({ message: "Item deleted successfully" });
});

app.listen(PORT, function () {
    console.log("Inventory Server is running on port " + PORT);
});
