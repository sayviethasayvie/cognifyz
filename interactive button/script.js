document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
       
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
        document.body.style.backgroundColor = randomColor;
    });
});
