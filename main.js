document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        // Generate random RGB values
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        // Construct RGB color string
        return `rgb(${red}, ${green}, ${blue})`;
    }

    changeColorBtn.addEventListener('click', function() {
        // Change background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
