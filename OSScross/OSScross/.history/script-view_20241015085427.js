//Print page
function printPage() {
    window.print();
  }

/* -- For Forms --*/
// For NCR number
document.addEventListener("DOMContentLoaded", function() {
  const ncrNumber = `NCR-${Math.floor(1000 + Math.random() * 9999)}`;
  document.getElementById("ncrNumber").textContent = ncrNumber;

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

function enableEdit() {
  const inputs = document.querySelectorAll('#ncr-form input, #ncr-form select, #ncr-form textarea, #ncrSor, #ncrWip');
  inputs.forEach(input => {
      input.readOnly = false;
      if (input.type === 'radio') {
          input.disabled = false;
      }
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


document.getElementById("roleInput").addEventListener("change", saveRole);


//
function enableDisableTextbox(e){
  var supplier=document.getElementById('ncrSor')
  var productNo=document.getElementById('ncrWip')
  var checkid=e.id;
  supplier.disabled=true;
  productNo.disabled=true;

  if(checkid==='ncrSor'){
    supplier.disabled=false;
  }
  else if (checkid==='ncrWip'){
    productNo.disabled=false;
  }
}
function saveRole() {
  const selectedRole = document.getElementById("roleInput").value;
  sessionStorage.setItem('selectedRole', selectedRole);
}

