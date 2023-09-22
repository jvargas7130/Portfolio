var skills = document.getElementById("skills");
var experience = document.getElementById("experience");
var education = document.getElementById("education");

var skillsTab = document.querySelector('.skills-tab');
var experienceTab = document.querySelector(".experience-tab");
var educationTab = document.querySelector(".education-tab");

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");




function opentab(subject){
  console.log( "what: " + subject);

    for(tablist of tablinks){
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





