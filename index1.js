document.addEventListener("DOMContentLoaded", function() {
    const endpoint = "https://api.jsonbin.io/v3/qs/6727c230ad19ca34f8c37c87"; // Replace with your actual endpoint

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data to check its structure
            // Check if the data is an array
            if (!Array.isArray(data)) {
                throw new TypeError('Expected an array but got ' + typeof data);
            }
            const postsContainer = document.getElementById("postsContainer");
            data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";

                // Check if the image property exists and create HTML accordingly
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
