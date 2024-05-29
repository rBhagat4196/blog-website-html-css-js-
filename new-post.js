document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('new-post-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageInput = document.getElementById('image');
        const imageFile = imageInput.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageData = event.target.result;

                const posts = JSON.parse(localStorage.getItem('posts')) || [];
                const newPost = {
                    id: '_' + Math.random().toString(36).substr(2, 9),
                    title,
                    content,
                    image: imageData
                };

                posts.push(newPost);
                localStorage.setItem('posts', JSON.stringify(posts));

                window.location.href = 'index.html';
            };
            reader.readAsDataURL(imageFile);
        }
    });
});
