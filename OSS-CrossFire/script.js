//Print page
function printPage() {
    window.print();
  }

  //Piechart
//   const ctx = document.getElementById('NcrChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {

//     }
//   }) = {
//     labels: [
//       'New',
//       'Pending',
//       'Completed'
//     ],
//     datasets: [{
//       label: 'NCRs',
//       data: [2, 5, 3],
//       backgroundColor: [
//         '#ff3b35',
//         '#ff7b00',
//         '#1fbd10'
//       ],
//       hoverOffset: 4
//     }]
//   };
  // Collapse and Enlarge
  /*const homeNcrBoxes = document.querySelectorAll('.home-ncr-box');
 
  homeNcrBoxes.forEach(box => {
    box.addEventListener('click', function () {
        console.log(box + "test");
        });
    });*/
    
    document.addEventListener('DOMContentLoaded', function () {
        // Select all elements with the class .home-ncr-box
        const homeNcrBoxes = document.querySelectorAll('.home-ncr-box');
      
            homeNcrBoxes.forEach(box => {
                const homeNcrSelect = box.querySelector(".home-all-ncr-section-select");
                const homeNcrContent = box.querySelector(".content");

                homeNcrSelect.addEventListener('click', function () {
                    console.log("clicked");
                    box.classList.toggle("active");
    
                });
            });
    });
  

//Pagination for Home Page
  document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5; // Number of items to display per page

    // Function to create pagination for a specific table
    function setupPagination(tableContent) {
        const itemsArray = Array.from(tableContent.getElementsByTagName('tr')).slice(1); // Exclude header
        const totalPages = Math.ceil(itemsArray.length / itemsPerPage);
        let currentPage = 0; // Current page starts at 0
        let pageNum; // Declare pageNum for page count display

        // Function to show a specific page
        function showPage(page) {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            itemsArray.forEach((item, index) => {
                item.classList.toggle('hidden', index < startIndex || index >= endIndex);
            });
            updatePageCounter(); // Update page counter display
        }

        // Function to update the page counter
        function updatePageCounter() {
            if (pageNum) {
                pageNum.textContent = `Page ${currentPage + 1} out of ${totalPages} pages`;
            }
        }

        // Create pagination buttons and total page display
        function createPageButtons() {
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination');
            tableContent.parentNode.appendChild(paginationContainer); // Append to the parent of the tableContent

            // Create page counter display
            pageNum = document.createElement("p");
            pageNum.classList.add('pageCount');
            paginationContainer.appendChild(pageNum); // Append to pagination container

            // Create Previous button
            const btnPrevious = document.createElement('button');
            btnPrevious.classList.add('pageButtons');
            btnPrevious.textContent = '<';
            btnPrevious.addEventListener('click', () => {
                if (currentPage > 0) {
                    currentPage--;
                    showPage(currentPage);
                }
            });
            paginationContainer.appendChild(btnPrevious);

            // Create Next button
            const btnNext = document.createElement('button');
            btnNext.classList.add('pageButtons');
            btnNext.textContent = '>';
            btnNext.addEventListener('click', () => {
                if (currentPage < totalPages - 1) {
                    currentPage++;
                    showPage(currentPage);
                }
            });
            paginationContainer.appendChild(btnNext);

            // Initial page display and update counter
            showPage(currentPage);
        }

        createPageButtons(); // Call the function to create pagination buttons
    }

    // Find all tables with class 'table-content' and set up pagination for each
    const tables = document.querySelectorAll('.table-content');
    tables.forEach(tableContent => {
        setupPagination(tableContent);
    });
});

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
  
  
//   document.getElementById("roleInput").addEventListener("change", saveRole);