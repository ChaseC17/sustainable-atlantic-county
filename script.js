// Initialize the map
function initMap() {
    const atlanticCounty = { lat: 39.3643, lng: -74.4229 }; // Center of Atlantic County, NJ
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 10,
        center: atlanticCounty,
    });

    // Example markers (replace with actual business data)
    const businesses = [
        { position: { lat: 39.355, lng: -74.445 }, title: "Business 1" },
        { position: { lat: 39.365, lng: -74.422 }, title: "Business 2" },
    ];

    businesses.forEach((business) => {
        new google.maps.Marker({
            position: business.position,
            map: map,
            title: business.title,
        });
    });
}
// Slideshow functionality
const images = document.querySelectorAll(".slideshow-image");
let currentIndex = 0;

function showNextImage() {
    // Remove the "active" class from the current image
    images[currentIndex].classList.remove("active");

    // Increment index (loop back to the start if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Add the "active" class to the new image
    images[currentIndex].classList.add("active");
}

// Start the slideshow (change image every 5 seconds)
setInterval(showNextImage, 5000);

// Initialize the first image as active
images[0].classList.add("active");
