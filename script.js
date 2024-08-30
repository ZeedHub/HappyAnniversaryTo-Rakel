// Add event listener to the photo container
document.querySelector('.photo-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('photo')) {
        // Get the photo src and alt attributes
        var photoSrc = event.target.src;
        var photoAlt = event.target.alt;
        
        // Create a modal to display the photo
        var modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = '<img src="' + photoSrc + '" alt="' + photoAlt + '">';
        document.body.appendChild(modal);
        
        // Add event listener to close the modal
        modal.addEventListener('click', function() {
            modal.remove();
        });
    }
});