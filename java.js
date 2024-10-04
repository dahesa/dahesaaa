function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }}

    function showSection(sectionId) {
      // Hide all sec
      document.querySelectorAll('.hotels-section').forEach(section => {
          section.classList.remove('active');
      });
  
      // Remove a ct class
      document.querySelectorAll('.tab').forEach(tab => {
          tab.classList.remove('active');
      });
  
      // Show selec setion
      document.getElementById(sectionId).classList.add('active');
      document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
  }