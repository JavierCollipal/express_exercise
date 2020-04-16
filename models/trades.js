var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let trades = new Schema({
    id: Number ,
    type: String,
    user: {
        id: Number ,
        name: String ,
    },
    symbol:  String ,
    shares: Number ,
    price: mongoose.Decimal28 ,
    timestamp : { type : Date, default: Date.now }
});

module.exports = mongoose.model('trades', trades);
