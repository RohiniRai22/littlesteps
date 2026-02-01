
let isSubmitting = false;

function saveBooking(event) {
    event.preventDefault();

    if (isSubmitting) return; // prevent double submission
    isSubmitting = true;

    let booking = {
        parent: document.getElementById("parent").value,
        age: document.getElementById("age").value,
        service: document.getElementById("service").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    
    alertify.success("Booking Confirmed!");
    setTimeout(() => {
    isSubmitting = false;
    location.reload();
}, 1500);

}

function loadBookings() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let table = document.getElementById("bookingTable");

    bookings.forEach(b => {
        let row = table.insertRow();
        row.innerHTML = `<td>${b.parent}</td><td>${b.age}</td><td>${b.service}</td><td>${b.date}</td><td>${b.time}</td><td>${b.phone}</td><td>${b.email}</td>`;
    });
}
document.addEventListener("DOMContentLoaded", function () {

     let dateInput = document.getElementById("date");
    if (dateInput) {
        // Get today in correct format YYYY-MM-DD
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // months start from 0
        let dd = String(today.getDate()).padStart(2, '0');

        let minDate = `${yyyy}-${mm}-${dd}`;
        dateInput.min = minDate; // only today and future dates selectable
    }
    let form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", saveBooking);
    }

});





