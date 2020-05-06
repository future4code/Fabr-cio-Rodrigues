function buttonClick() {
        let postConfirmation = confirm("Tem certeza que deseja postar essa publicação na sua linha do tempo?");
        if (postConfirmation == true) {
            post();
        } else {
            console.log("Confirmação negada.")
        }
    }

function onEnterPress(event) {
    if(event.key === 'Enter') {
        postConfirmation = confirm("Tem certeza que deseja postar essa publicação na sua linha do tempo?"); 
        if (postConfirmation == true) {
            post();
        } else {
            console.log("Confirmação negada.")
        }
    }
}

function post() {
    const postTitle = document.getElementById("post-title")
    const postAuthor = document.getElementById("post-author");
    const myPost = document.getElementById("post-input");

    const postPublishing = document.getElementById("post");

    postPublishing.innerHTML += "<div class='post-title'>" + postTitle.value + "</div>";
    postPublishing.innerHTML += "<div class='post-author'>" + "Escrito por: " + postAuthor.value + "</div>";
    postPublishing.innerHTML += "<div class='post'>" + myPost.value + "</div>";

    myPost.value = '';
    postAuthor.value = '';
    postTitle.value = '';
}
