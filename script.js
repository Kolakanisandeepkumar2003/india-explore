  function display(sectionId) {
    const sections = document.querySelectorAll("body > div");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
  }


   document.getElementById("sectionHome").style.display = "block";