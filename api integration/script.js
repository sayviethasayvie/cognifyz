document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    const postsList = document.getElementById('postsList');

    button.addEventListener('click', () => {
       
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
        document.body.style.backgroundColor = randomColor;
    });

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
        
            postsList.innerHTML = '';
        
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = `${post.title}: ${post.body}`;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

 
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

    
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            valid = false;
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }

      
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageError.style.display = 'block';
            valid = false;
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
        }


        if (valid) {
            console.log('Form Submitted:', {
                name: name.value,
                email: email.value,
                message: message.value
            });
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});


