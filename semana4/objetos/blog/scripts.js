let posts = [];
let postID = 0;

// OBJETO

const post = {
    title: document.getElementById("post-title"),
    author: document.getElementById("post-author"),
    text: document.getElementById("post-input"),
    image: document.getElementById('post-image'),
}

function publish() {
    const postTitle = post.title;
    const postAuthor = post.author;
    const postText = post.text;
    const postImage = post.image;

    let postPublishing = document.getElementById("post");
    postPublishing.innerHTML += "<div class='new-post " + 'post' + postID + "'>"
    postPublishing.innerHTML += "</div>"

    let postContent = document.querySelector(`.post, .post${postID}`);
 
    postContent.innerHTML += "<div class='post-title'>" + postTitle.value + "</div>";
    postContent.innerHTML += "<div class='post-author'>" + postAuthor.value + "</div>";
    postContent.innerHTML += "<div class='post-image'>" + "<img src='" + postImage.value +"'/>" + "</div>";
    postContent.innerHTML += "<div class='post-text'>" + postText.value + "</div>";

    postText.value = '';
    postAuthor.value = '';
    postImage.value = '';
    postTitle.value = '';
    postID++;
}

function onEnterPress(event) {
    if (event.key === 'Enter') {
        postConfirmation = confirm("Tem certeza que deseja postar essa publicação na sua linha do tempo?");
        if (postConfirmation == true) {
            publish();
        } else if (postConfirmation == false) {
            console.log("Confirmação negada.")
        }
    }
}

function buttonClick() {
    let postConfirmation = confirm("Tem certeza que deseja postar essa publicação na sua linha do tempo?");
    if (postConfirmation == true) {
        publish();
    } else {
        console.log("Confirmação negada.")
    }
}
