document.addEventListener("DOMContentLoaded", function () {

    const beginButton = document.getElementById("begin-button");
    const introContent = document.querySelector(".intro-content");
    const giftSection = document.getElementById("gift-section");
    const giftBox = document.getElementById("gift-box");
    const letterSection = document.getElementById("letter-section");
    const videoSection = document.getElementById("video-section");

    // INITIAL STATE
    introContent.style.display = "block";
    giftSection.style.display = "none";
    letterSection.style.display = "none";
    videoSection.style.display = "none";


    // BEGIN
    beginButton.addEventListener("click", function () {

        document.querySelector(".small-text").style.display = "none";
        document.getElementById("intro-title").style.display = "none";
        document.getElementById("intro-message").style.display = "none";
        beginButton.style.display = "none";

        giftSection.classList.remove("hidden");
giftSection.style.setProperty("display", "flex", "important");
    });


    // GIFT
    giftBox.addEventListener("click", function () {

        giftBox.style.animation = "giftOpen 0.5s ease forwards";

        createConfetti();

        setTimeout(function () {

            giftBox.style.display = "none";

            document.querySelector(".gift-message").innerHTML =
                "Happy 20th Birthday,<br><span>Shylla</span>";

            document.querySelector(".tap-message").textContent =
                "Your surprise has only just begun...";

            letterSection.classList.remove("hidden");
letterSection.style.setProperty("display", "flex", "important");

            setTimeout(function () {

                letterSection.scrollIntoView({
                    behavior: "smooth"
                });

            }, 300);

        }, 500);

    });


    // SHOW VIDEO WHEN USER REACHES THE END OF THE LETTER
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

               videoSection.classList.remove("hidden");
videoSection.style.setProperty("display", "flex", "important"); 

            }

        });

    }, {
        threshold: 0.1
    });

    observer.observe(letterSection);


    // CONFETTI
    function createConfetti() {

        for (let i = 0; i < 80; i++) {

            const confetti = document.createElement("div");

            confetti.classList.add("confetti");

            confetti.style.left = "50%";
            confetti.style.top = "50%";

            confetti.style.setProperty(
                "--x",
                (Math.random() - 0.5) * 500 + "px"
            );

            confetti.style.setProperty(
                "--y",
                (Math.random() - 0.5) * 500 + "px"
            );

            confetti.style.animationDelay =
                Math.random() * 0.4 + "s";

            document.body.appendChild(confetti);

            setTimeout(function () {
                confetti.remove();
            }, 2500);
        }
    }

});
        
        
