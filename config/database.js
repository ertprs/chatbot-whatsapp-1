const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://victorshermon:victor1999@cluster0.oeoog.mongodb.net/clientes?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;