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