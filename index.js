// const url ='https://docs.impala.travel/docs/booking-api/';
// const options ={
//   method :'GET' ,
// }
const db = "https://docs.impala.travel/docs/booking-api/"

document.addEventListener("DOMContentLoaded", () => {
    getHotels();
    document.querySelector("#book-hotel").addEventListener("click", handleBookTicket);
});

function getHotels() {
    fetch(db)
    .then(res => res.json())
    .then(hotel => {
        hotel.forEach(hotel => {renderHotelList(hotel)})
        const firstHotel = document.querySelector("#id1");
        firstHotel.dispatchEvent(new Event("click"));
    })
}
