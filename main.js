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
            function nextslide()
            {
                i++;
                var numbers_of_family_member_in_array = 3
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("Album").src = updatedImage;
                document.getElementById("lam").innerHTML = updatedName;
            }