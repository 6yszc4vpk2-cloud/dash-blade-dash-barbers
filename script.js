document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const service = form.querySelector("select").value;
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;

        if(name === "" || service === "" || date === "" || time === ""){
            alert("Please fill in all required fields.");
            return;
        }

        alert(
            `Thank you, ${name}!\n\n` +
            `Your appointment for "${service}" has been booked.\n\n` +
            `Date: ${date}\n` +
            `Time: ${time}\n\n` +
            `We look forward to seeing you!`
        );

        form.reset();

    });

});