(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        items: 1,
        autoplayTimeout: 5000
    });
    
})(jQuery);

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function initMap() {

	// pick center coordinates for your map
	var myMapCenter = {lat: 40.785091, lng: -73.968285};

	// create map and say which HTML element it should appear in
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myMapCenter,
		zoom: 14
	});

    /* var marker = new google.maps.Marker({
        map: map,
        position: myMapCenter,
        title: 'Hello World!'
    });

    marker.addListener('click', function(){
        alert('Marker was clicked!');
    }); */

    var stores = [
        {
            name: 'Store 1',
            location: {lat: 12.932371565184244, lng: 77.6864841768338},
            hours: '8AM to 10PM'
        },
        {
            name: 'Store 2',
            location: {lat: 40.790091, lng: -73.968285},
            hours: '9AM to 9PM'
        }
    ];
    
}

function markStore(storeInfo){

	// Create a marker and set its position.
	var marker = new google.maps.Marker({
		map: map,
		position: storeInfo.location,
		title: storeInfo.name
	});

	// show store info when marker is clicked
	marker.addListener('click', function(){
		showStoreInfo(storeInfo);
	});
}

// show store info in text box
function showStoreInfo(storeInfo){
	var info_div = document.getElementById('info_div');
	info_div.innerHTML = 'Store name: '
		+ storeInfo.name
		+ '<br>Hours: ' + storeInfo.hours;
}
stores.forEach(function(store){
	markStore(store);
});

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKOxB4F9i4inIgh7pgQIkUIAoJVT_y9u0&callback=initMap" async defer></script>
/* function checkPassword(form) {
   password1 = form.password1.value;
   password2 = form.password2.value;

    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
        
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
        
    // If Not same return False.	
    else if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
    else{
        alert("Password Match: Welcome to VoizFonica!")
        
        return true;
    }
}

var psw = document.getElementById("myInput");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
psw.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
psw.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
psw.onkeyup = function() {
 
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(psw.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  
  // Validate length
  if(psw.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
 */
