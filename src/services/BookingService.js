const Booking = require("../models/Booking");

class BookingService {

    async saveBooking({ spot_id , date , user_id  }){
        const booking = await Booking.create({
            date ,
            user : user_id ,
            spot : spot_id
         });
         await booking.populate('spot').populate('user').execPopulate();
       return booking;
    }
}

module.exports = new BookingService();