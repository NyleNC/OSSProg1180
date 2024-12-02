//Print page
// function printPage() {
//     window.print();
//   }

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('print-btn').addEventListener('click', function() {
      const path = "pdf/summary.pdf";
      const printWindow = window.open(path, '_blank');
      printWindow.addEventListener('load', function() {
        printWindow.print();
      });
  });
})

/* -- For Forms --*/
// For NCR number
document.addEventListener("DOMContentLoaded", function() {
  // const ncrNumber = `NCR-${Math.floor(1000 + Math.random() * 9999)}`;
  // document.getElementById("ncrNumber").textContent = ncrNumber;

  // For date
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  document.getElementById("ncrDate").textContent = formattedDate;
});

// Validation
function validateForm() {
  const form = document.getElementById("ncr-form");
  if (form.checkValidity()) {

      document.getElementById('successPopup').style.display = 'flex';
      return false;
  }
  return true;
}


// All the popups and buttons
function closePopup() {
  document.getElementById('successPopup').style.display = 'none';
}

function createAnotherNCR() {
  document.getElementById('ncr-form').reset();
  document.getElementById('successPopup').style.display = 'none';
}

function viewAllNCRs() {
  window.location.href = 'ncr.html';      // Have to put our link for view All
}

function goBack() {
  window.history.back();
}

function enableEdit(button) {
  console.log("Edit button clicked!")
  const inputs = document.querySelectorAll('#ncr-form input, #ncr-form select, #ncr-form textarea, #ncrSor, #ncrWip');
  inputs.forEach(input => {
      input.readOnly = false;
      if (input.type === 'radio') {
          input.disabled = false;
      }
  button.style.display = "none";
  document.querySelector('.btnSave').style.display = 'inline-block';
  });

  document.querySelector('.btnSave').style.display = 'inline-block';
}

function saveForm() {
  const inputs = document.querySelectorAll('#ncr-form input, #ncr-form select, #ncr-form textarea');
  inputs.forEach(input => {
      input.readOnly = true;
      if (input.type === 'checkbox') {
          input.disabled = true;
      }
  });

  document.querySelector('.btnSave').style.display = 'none';
  document.querySelector('.btnEdit').style.display = 'inline-block';

  document.getElementById('successPopup').style.display = 'flex';
}
/* -- For Forms --*/

function saveRole() {
  const selectedRole = document.getElementById("roleInput").value;
  sessionStorage.setItem('selectedRole', selectedRole);
}

function loadSelectedRole() {

  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      sessionStorage.removeItem('selectedRole');
  } else {
      const selectedRole = sessionStorage.getItem('selectedRole');
      if (selectedRole) {
          document.getElementById("roleInput").value = selectedRole;
      }
  }
}


window.addEventListener("load", loadSelectedRole);


const roleInput = document.getElementById("roleInput");

if (roleInput) {
  roleInput.addEventListener("change", saveRole);
} else {
  console.log("Element with id 'roleInput' not found.");
}


//
function enableDisableTextbox(e){
  var supplier=document.getElementById('supplierName')
  var productNo=document.getElementById('ProductNo')
  var checkid=e.id;
  supplier.disabled=true;
  productNo.disabled=true;

  if(checkid==='supp'){
    supplier.disabled=false;
  }
  else if (checkid==='wip'){
    productNo.disabled=false;
  }
}


// Function to enable/disable textarea based on selected radio button
function enaDisTextboxForEng(e) {
  const engDescription = document.getElementById("engEngineering");

  // Disable the textarea by default
  engDescription.disabled = true;

  // Enable the textarea only if "repair" or "rework" is selected
  if (e.id === "repair" || e.id === "rework") {
      engDescription.disabled = false;
  }
}

// Add event listeners to the radio buttons
document.addEventListener("DOMContentLoaded", function () {
  const repairRadio = document.getElementById("repair");
  const reworkRadio = document.getElementById("rework");
  const otherRadios = [document.getElementById("useAsIs"), document.getElementById("scrap")];

  // Attach event listener to "repair" and "rework" radio buttons
  repairRadio.addEventListener("change", function () {
      enaDisTextboxForEng(this);
  });

  reworkRadio.addEventListener("change", function () {
      enaDisTextboxForEng(this);
  });

  // Attach event listener to other radio buttons to ensure the textarea is disabled
  otherRadios.forEach(radio => {
      radio.addEventListener("change", function () {
          enaDisTextboxForEng(this);
      });
  });
});




// For Saving a form.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#ncr-form");
  const saveButton = document.querySelector(".btnSave");
  let isFormDirty = false;

  // Show save button when the user starts filling the form
  form.addEventListener("input", function () {
      if (!isFormDirty) {
          isFormDirty = true;
          saveButton.style.display = "inline-block"; // Show save button
      }
  });

  // Save form data to localStorage
  saveButton.addEventListener("click", function () {
      const formData = new FormData(form);
      const dataToSave = {};

      // Convert form data to an object
      for (const [key, value] of formData.entries()) {
          dataToSave[key] = value;
      }

      localStorage.setItem("ncrFormData", JSON.stringify(dataToSave));
      alert("Form data saved!");
  });

  // Warn the user if they try to navigate away with unsaved changes
  window.addEventListener("beforeunload", function (event) {
      if (isFormDirty) {
          event.preventDefault();
          event.returnValue = ""; 
      }
  });

  // Pre-fill the form if saved data exists
  const savedData = JSON.parse(localStorage.getItem("ncrFormData"));
  if (savedData) {
      for (const [key, value] of Object.entries(savedData)) {
          const field = form.elements[key];
          if (field) {
              field.value = value;
          }
      }
  }
});