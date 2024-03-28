document.addEventListener("DOMContentLoaded", function() {
  const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const myImage_src = myImage.getAttribute("src");

    if (myImage_src === "images/audi.jpg") {
      myImage.setAttribute("src", "images/audi2.jpg");
    } else {
      myImage.setAttribute("src", "images/audi.jpg");
    }
  };
});
