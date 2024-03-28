window.onload = function() {
    const bigHeader = document.querySelector('.big-header');
    const smallHeader = document.querySelector('.small-header');
    
    // Get the width of the big header
    const bigHeaderWidth = bigHeader.offsetWidth;
    
    // Set the left margin of the small header to match the width of the big header
    smallHeader.style.marginLeft = bigHeaderWidth + '20px';
};
