var images = [
    "madh.jfif",
    "vas.jfif",
    "shan.jfif"
];
var names = [
    "Madhura Tikekar",
    "Vaishnavi Tikekar",
    "Shantanu Tikekar"
];
var i = 0;

function nextslide() {
    document.getElementById("Album").src = images[i];
    document.getElementById("lam").innerHTML = reasons[i];
    i++;
}