const express=require('express');
const router=express.Router();
const Ticket=require('../models/ticket');
const faker=require('faker');

router.all('/*',(req,res,next)=>{

    req.app.locals.layout='main';
    next();
});


router.get('/',(req,res)=>{

    res.render('home');

});

router.post('/generate-fake-users',(req,res)=>{

    for(let i=0;i<100;i++){
        let ticket=new Ticket();

        ticket.passengerName=faker.name.firstName();
        ticket.source=faker.address.country();
        ticket.destination=faker.address.country();
        ticket.flightNumber=faker.random.number();
        ticket.date=Date.now();
        ticket.seatNumber=faker.random.number();
        ticket.date=faker.date.recent();
        ticket.phoneNumber=faker.phone.phoneNumber();

        ticket.save().then((newTicket)=>{
            console.log(`User saved ${i}`);
        });



    }

    res.redirect('home/success');








});


module.exports=router;