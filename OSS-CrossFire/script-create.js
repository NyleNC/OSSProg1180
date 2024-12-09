// NCR Create sections
document.addEventListener('DOMContentLoaded', function () {
const ncrSections = document.querySelectorAll('.ncrSection');

ncrSections.forEach(section => {
    const ncrSectionTitle = section.querySelector('.ncrSection-title')
    const ncrSectionForm = section.querySelector('.ncrSection-form')
    
    ncrSectionTitle.addEventListener('click', function() {
        console.log('clicked');
        section.classList.toggle("active");
    })
})
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('print-btn').addEventListener('click', function() {
        const path = "pdf/summary.pdf";
        const printWindow = window.open(path, '_blank');
        printWindow.addEventListener('load', function() {
          printWindow.print();
        });
    });
  })


  




  
// For Saving a form.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelectorAll("#ncr-form");


    form.forEach(element => {
        const saveButton = element.querySelector(".btnSave");

        element.addEventListener("input", function () {
            
            saveButton.style.display = "inline-block"; // Show save button
        
    });
    });



   
  
   

  });
