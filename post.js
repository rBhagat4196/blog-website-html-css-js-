document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(post => post.id === postId);

    if (post) {
        const postContainer = document.getElementById('post');
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            ${post.image ? `<img src="${post.image}" alt="${post.title} Image">` : ''}
            <p>${post.content}</p>
        `;
    } else {
        document.getElementById('post').innerHTML = '<p>Post not found.</p>';
    }
});
