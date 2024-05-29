document.addEventListener('DOMContentLoaded', function () {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            ${post.image ? `<img src="${post.image}" alt="${post.title} Image">` : ''}
            <p>${post.content.substring(0, 100)}...</p>
            <a href="post.html?id=${post.id}">Read More</a>
        `;
        postsContainer.appendChild(postElement);
    });
});
