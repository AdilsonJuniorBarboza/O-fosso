document.addEventListener("DOMContentLoaded", function() {
    const videosContainer = document.getElementById("videos-grid");

    // Array com informações dos vídeos (capa local, título e link do vídeo)
    const videos = [
        { 
            title: "Rogue Heartseeker - VELOSO",
            thumbnail: "buildheartseeker-veloso.jpeg",
            videoLink: "https://youtu.be/uUD-L3YCu94?si=6RlTiYVVMc-5qxwD"
        },
        { 
            title: "Bárbaro WhirlWind - VELOSO",
            thumbnail: "buildwhirlwind-veloso.jpg",
            videoLink: "https://youtu.be/GIjwjL4znn4?si=z9O1Hmmr8-j1krZ9"
        },
        // Adicione mais vídeos conforme necessário
    ];

    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("video");

        const thumbnail = document.createElement("img");
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;
        videoElement.appendChild(thumbnail);
        videoElement.addEventListener("click", function() {
            window.open(video.videoLink, "_blank"); // Abrir link em uma nova aba
        });

        const title = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.textContent = video.title;
        titleLink.href = video.videoLink;
        titleLink.target = "_blank"; // Abrir em uma nova aba
        titleLink.style.color = "#fff";
        title.appendChild(titleLink);
        videoElement.appendChild(title);

        videosContainer.appendChild(videoElement);
    });
});
