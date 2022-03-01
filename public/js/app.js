// front script
//   open nav in apps screen
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
//Theme js
const checkboxx = document.getElementById("checkbox");
checkboxx.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
/////////////////////////////////////////////

// var for each id
const form = document.getElementById("form");
const username = document.getElementById("username");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const textar = document.getElementById("textarea");
// event for form inputs val
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

//  Error status
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
//  Success status
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
// email pattern
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// all inputs val fun
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectval = subject.value.trim();
  const textarvalue = textar.value.trim();
  
  // name val
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length > 10 || usernameValue.length < 3) {
    setError(
      username,
      "Username must be  mor than 3 char and less than 10 char"
    );
  } else {
    setSuccess(username);
  }
  // subject val
  if (subjectval === "") {
    setError(subject, "Username is required");
  } else if (subjectval.length > 10 || subjectval.length < 3) {
    setError(
      subject,
      "Username must be  mor than 3 char and less than 10 char"
    );
  } else {
    setSuccess(subject);
  }
  // email val
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
    alert("cool");
  }
  // textarea
  if (textarvalue.length < 20) {
    setError(textar, "textarea must be at least 20 char");
  } else {
    setSuccess(textar);
   
  }
};

//	Image effect
document.querySelectorAll(".small-image-2").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-2").src = images.getAttribute("src");
  };
});
// <!--  js for mobile screen navigation -->
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));


//  DashBoard script
$(document).ready(function () {
    'use strict';

    $(window).scroll(function() {
        if($(this).scrollTop()>5) {
            $(".custom-style").addClass("fixed-me");
        }else{
            $(".custom-style").removeClass("fixed-me");
        }
    });
    
    
    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });



});