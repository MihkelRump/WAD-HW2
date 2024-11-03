document.addEventListener("DOMContentLoaded", function() {
    fetch("posts.json")
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById("postsContainer");
            data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";
                
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p><strong>Author:</strong> ${post.author}</p>
                    <p><small>${new Date(post.createTime).toLocaleString()}</small></p>
                    <img src="${post.image}" alt="Post Image" class="post-image">
                `;
                
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
