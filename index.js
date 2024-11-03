document.addEventListener("DOMContentLoaded", function() {
    fetch("posts.json")
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById("postsContainer");
            const posts = data.Posts; // Access the Posts array

            // Check if posts is an array
            if (!Array.isArray(posts)) {
                throw new TypeError('Expected an array but got ' + typeof posts);
            }

            posts.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";

                // Check if the image property exists and is not empty
                const imageHtml = post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : '';

                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p><strong>Author:</strong> ${post.author}</p>
                    <p><small>${new Date(post.createTime).toLocaleString()}</small></p>
                    ${imageHtml}  <!-- Only add the image if it exists -->
                `;
                
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
