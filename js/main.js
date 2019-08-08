$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// List things June likes on Button Click

var items = [
"Bathing in the sun",
"Playing fetch",
"Napping, and snugs with mom and dad",
"Car rides with the windows down",
"Boating on Vandalia Lake",
"Anything with cheese",
"Cucumbers",
"Tearing up dryer sheets",
"Mom & Dad"
];

document.getElementById("thingsbutton").addEventListener("click",
  function () {
    var things_article = document.getElementById("itemsjunelikes");
    var rand_int = Math.floor(Math.random() * 9); //number matches number of item in array you are swapping out at each page load
    things_article.innerHTML = items[rand_int];
  }, false
);


 $("#backstretch").backstretch("images/dog-banner.png");
