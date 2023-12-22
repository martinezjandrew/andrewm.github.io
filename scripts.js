function openNewLocalPage(url) {
  window.location.href = url;
}

function generateTopBar() {
    const topbar = document.createElement("div");
    topbar.className = "topline";
    topbar.name = "topbar";

    const circle = document.createElement("div");
    circle.className = "topline circle"
    const profilePictureImage = document.createElement("img");
    profilePictureImage.src = "images/amongus.png"
    profilePictureImage.alt = "picutre of andrew martinez"
    circle.appendChild(profilePictureImage);

    

    
}