const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    //  else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".text2");
hiddenElements.forEach((el) => observer.observe(el));

// take a picture

let canavs = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
}

document.getElementById("snap").addEventListener("click", () => {
  context.drawImage(video, 0, 0, 640, 480);
});

showCanvas = () => {
  const canvas = document.getElementById("canvas");
  canvas.dataset.hidden = false;
};

// showCanvas();
