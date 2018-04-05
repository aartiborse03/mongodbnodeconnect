const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const TicketSchema=new Schema({

    passengerName: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }

});


module.exports=mongoose.model('tickets', TicketSchema);
