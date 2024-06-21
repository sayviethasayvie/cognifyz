document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    const postsList = document.getElementById('postsList');

    button.addEventListener('click', () => {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Change the background color
        document.body.style.backgroundColor = randomColor;
    });

    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Clear existing list items
            postsList.innerHTML = '';
            // Loop through the data and create list items
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = `${post.title}: ${post.body}`;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

