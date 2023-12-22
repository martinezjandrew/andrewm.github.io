function openNewLocalPage(url) {
  window.location.href = url;
}

function generateTopBar() {
    const topbar = document.createElement("div");
    topbar.className = "topline topbox";
    topbar.name = "topbar";

    const circle = document.createElement("div");
    circle.className = "topline circle"
    
    const profilePictureImage = document.createElement("img");
    profilePictureImage.src = "images/amongus.png"
    profilePictureImage.alt = "picutre of andrew martinez"
    circle.appendChild(profilePictureImage);
    topbar.appendChild(circle)

    const title = document.createElement("header");
    title.textContent = "Andrew Martinez"
    topbar.appendChild(title)

    const menubar = document.createElement("div");
    menubar.className = "topline menu"

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.className = "my-button";
    homeButton.addEventListener('click', function() {
        openNewLocalPage("index.html");
    });
    menubar.appendChild(homeButton)

    const aboutMeButton = document.createElement("button");
    aboutMeButton.textContent = "About Me";
    aboutMeButton.className = "my-button";
    aboutMeButton.addEventListener('click', function() {
        openNewLocalPage("aboutme.html");
    });
    menubar.appendChild(aboutMeButton)

    const projectsButton = document.createElement("button");
    projectsButton.textContent = "Projects";
    projectsButton.className = "my-button";
    projectsButton.addEventListener('click', function() {
        openNewLocalPage("projects.html");
    });
    menubar.appendChild(projectsButton)

    const body = document.getElementById("container");
    body.prepend(menubar)
    body.prepend(topbar);
}