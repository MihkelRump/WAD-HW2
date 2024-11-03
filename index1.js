document.addEventListener("DOMContentLoaded", function() {
    const endpoint = "https://api.jsonbin.io/v3/qs/6727c5d6acd3cb34a8a1f6c8"; 

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            
            // Accessing the Posts array from the record object
            const posts = data.record.Posts; // This is the correct path to the array of posts

            if (!Array.isArray(posts)) {
                throw new TypeError('Expected an array of posts but got ' + typeof posts);
            }

            const postsContainer = document.getElementById("postsContainer");
            posts.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";

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
