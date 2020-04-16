var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uuid = require('uuid');

let trades = new Schema({
    id: { type: String, default: uuid.v1()},
    type: String,
    user: {
        id: { type: String, default: uuid.v1()},
        name: String ,
    },
    symbol:  String ,
    shares: Number ,
    price: mongoose.Decimal28 ,
    timestamp : { type : Date, default: Date.now }
});

module.exports = mongoose.model('trades', trades);
