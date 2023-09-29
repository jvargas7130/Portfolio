var skills = document.getElementById("skills");
var experience = document.getElementById("experience");
var education = document.getElementById("education");

var skillsTab = document.querySelector('.skills-tab');
var experienceTab = document.querySelector(".experience-tab");
var educationTab = document.querySelector(".education-tab");

var tabLinks = document.getElementsByClassName("tab-links");


var mobileLinks = document.getElementById('mobile-nav-links');



//The function below 
function opentab(subject){
  console.log( "what: " + subject);

    for(tablist of tabLinks){
        tablist.classList.remove("active-link");
       
    }

    if(subject=="education"){
        educationTab.classList.add("active-link")
    }else if(subject=="skills"){
        skillsTab.classList.add("active-link")
    }else if(subject=="experience"){
        experienceTab.classList.add("active-link")
    }
    // for(tabcontent of tabcontents){
    //     tabcontent.classList.remove("active-tab");
    // }
      // newtablist.classList.add("active-link");


   if(subject == "skills"){
        skills.style.display = "block"; 
        experience.style.display = "none";
        education.style.display = "none";

   }else if(subject == "experience"){
        experience.style.display = "block";
        skills.style.display = "none";
        education.style.display = "none";
   }else if(subject == "education"){
        education.style.display = "block";
        experience.style.display = "none";
        skills.style.display = "none";
   }
  

}

//Used in mobile version. The menu begins in closed 
//"display-none" status. The "display-block" status is to display menu.
function nav(){
    if(mobileLinks.style.display === "none"){
        mobileLinks.style.display = "block";
        return;
    }else {
        mobileLinks.style.display = "none";
        return;
    }
}

//Contacts
function sendMail() {
    console.log("sent email");
  
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  
    };
    const serviceID = "service_yof9mqm";
    const templateID = "template_6wb7jct";
  console.log("mail");
    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log("res " + res);
          alert("your message sent successfully")
        })
      .catch((err) => console.log(err));
  };

  /*Checks to validate name, email and message on contact us form  */
function validation() {
    console.log("validation1");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.padding = "10px";
    if (name.length < 3) {
      console.log("validation2");
      text = "please enter valid name";
      error_message.innerHTML = text;
      return false; //breaks out and returns false
    }
    if (email.indexOf("@") == -1 || email.length < 6 || email.indexOf(".") == -1) {
      console.log("validation3");
      text = "please enter valid email";
      error_message.innerHTML = text;
      return false; //breaks out and returns false
    }
    if (message.length <= 10) {
      text = "Please enter more than 10 characters";
      error_message.innerHTML = text;
      return false;//breaks out and returns false
    }
    console.log("Send mail");
    sendMail();//sends message to email
    error_message.remove();//renoves div with error message 
  };
  


