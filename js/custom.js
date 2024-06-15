// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {

    var mapProp = {
        center: new google.maps.LatLng(45.58472766288528, -73.78137408745384),
        zoom: 16,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Define the coordinates for the marker
    var markerPosition = new google.maps.LatLng(45.58472766288528, -73.78137408745384);

    
    // Create a custom marker icon with the desired color
    var markerIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // Marker icon URL
        scaledSize: new google.maps.Size(40, 40), // Size of the marker icon
    };


    // Create a marker and set its position on the map
    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: '2620 Rue de L\'Ombrette , Laval, H7L 4P4, Qc, Canada' // Optional title for the marker
    });

}

function copyToClipboard(text) {

    // Create a temporary input element
    var input = document.createElement('input');
    // Set its value to the text we want to copy
    input.value = text;
    // Append it to the body
    document.body.appendChild(input);
    // Select the text inside the input
    input.select();
    // Execute the copy command
    document.execCommand('copy');
    // Remove the input from the DOM
    document.body.removeChild(input);
    // Optionally, provide some feedback to the user
    alert('Text copied to clipboard: ' + text);
    
}

function toggleContent(event) {

    event.preventDefault(); // Prevent the default behavior of the anchor link

    var moreServices = document.getElementById("moreServices");
    var button = document.getElementById("view-more-button");
    if (moreServices.style.display === "none" || moreServices.style.display === "") {
      moreServices.style.display = "block";
      button.textContent = "Voir moins";
    } else {
      moreServices.style.display = "none";
      button.textContent = "Voir plus";
    }
 
}

// Function to send email
function sendEmail(event) {

    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS API
    emailjs.send("service_86h9rws", "template_b40558l", {
        from_name: name,
        phone_number: phone,
        from_email: email,
        message_html: message
    })
    .then(function(response) {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully!");
        // Optionally, clear the form fields after successful submission
        document.getElementById("contactForm").reset();
    }, function(error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending your message. Please try again later.");
    });

}