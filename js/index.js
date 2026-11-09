window.onload = function() {
    const images = document.getElementsByTagName("img");

    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", () => {
            if(images[i].getAttribute("id") != "fullscreen-image-img") {
                showFullscreenImage(images[i]);
            }
        });
    }

    document.getElementById("fullscreen-image").getElementsByClassName("x")[0].addEventListener("click", () => {
        hideFullscreenImage();
    });

    document.addEventListener("keydown", event => {
        if(event.key == "Escape") {
            hideFullscreenImage();
        }
    });
}

function showFullscreenImage(imgElement) {
    document.getElementById("fullscreen-image").classList.remove("hidden");
    document.getElementsByTagName("body")[0].classList.add("fixed");
    
    document.getElementById("fullscreen-image-img").setAttribute("src", imgElement.getAttribute("src"));
    document.getElementById("fullscreen-image-title").innerHTML = imgElement.getAttribute("title");
}

function hideFullscreenImage() {
    document.getElementById("fullscreen-image").classList.add("hidden");
    document.getElementsByTagName("body")[0].classList.remove("fixed");
}
