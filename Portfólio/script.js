function changeProfileImage() {
    let img = document.getElementById("image");
    let name = document.querySelector(".name");

    if (img.src.endsWith("victor.jpg")) {
        img.src = "imgs/rigby.jpg";
        name.textContent = "Rigby";
    } else {
        img.src = "imgs/victor.jpg";
        name.textContent = "Victor Hugo";
    }
}
