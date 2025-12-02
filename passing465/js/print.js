// add a button to the homepage that prints the page when clicked
document.addEventListener('DOMContentLoaded', () => {
    // Create the print button
    let printButton = document.createElement('button');
    printButton.textContent = 'Print Page';
    printButton.style.padding = '10px 15px';
    printButton.style.backgroundColor = '#007bff';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '5px';

    // Append the button to the body
    let section = document.querySelector('main > section:nth-of-type(2)');
    section.appendChild(printButton);

    // Add click event to print the page
    printButton.addEventListener('click', () => {
        window.print();
    });
});