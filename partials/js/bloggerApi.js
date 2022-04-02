
const blogs = document.querySelector('.blogs');

url = "https://www.googleapis.com/blogger/v3/blogs/7491525822603076436/posts?key=AIzaSyAxaU9qOW1yD4fULfDav_kbOWcDEBieLjg";
fetch(url)
    .then((response) => {
        return response.json();
    }).then((data) => {
        for(i=0; i < 6; i++){
            // console.log(data.items[i].content);
            //       blogs.innerHTML = `
            // <a href="#" class="blog-card">
            // <i class="fa-regular fa-folder"></i>
            // <i class="fa-solid fa-arrow-up-right-from-square link"></i>
            // <p class="post-title title1">${data.items[i].title}</p>
            // <p class="content">${data.items[i].content}</p>
            // <p class="tags tags1">${i}</p>
            // </a>`;
                let card = document.createElement("div");
                card.classList.add('card-wrapper');
                card.innerHTML = `
                <a href="${data.items[i].url}" target="_blank" class="blog-card">
                <i class="fa-regular fa-folder"></i>
                <i class="fa-solid fa-arrow-up-right-from-square link"></i>
                <p class="post-title title1">${data.items[i].title}</p>
                <p class="content"></p>
                <p class="tags">${
                    data.items[i].labels[0]
                } - ${data.items[i].labels[2]}
                </p>
                </a>`;
                blogs.appendChild(card);
        }
    })
