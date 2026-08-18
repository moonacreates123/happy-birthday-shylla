document.addEventListener("DOMContentLoaded", function () {

    const beginButton = document.getElementById("begin-button");
    const introContent = document.querySelector(".intro-content");
    const giftSection = document.getElementById("gift-section");
    const giftBox = document.getElementById("gift-box");
    const letterSection = document.getElementById("letter-section");
    const videoSection = document.getElementById("video-section");

    // Make sure the correct starting screen is visible
    introContent.style.display = "block";
    giftSection.classList.add("hidden");
    letterSection.classList.add("hidden");
    videoSection.classList.add("hidden");


    // BEGIN SURPRISE
    beginButton.addEventListener("click", function () {

        // Hide only the intro text and button
        document.querySelector(".small-text").style.display = "none";
        document.getElementById("intro-title").style.display = "none";
        document.getElementById("intro-message").style.display = "none";
        beginButton.style.display = "none";

        // Show the gift
        giftSection.classList.remove("hidden");
        giftSection.style.display = "flex";

    });


    // OPEN GIFT
    giftBox.addEventListener("click", function () {

        giftBox.style.animation = "giftOpen 0.5s ease forwards";

        createConfetti();

        setTimeout(function () {

            giftBox.style.display = "none";

            document.querySelector(".gift-message").innerHTML =
                "Happy 20th Birthday,<br><span>Shylla</span>";

            document.querySelector(".tap-message").textContent =
                "Your surprise has only just begun...";

            // Show letter
            letterSection.classList.remove("hidden");
            letterSection.style.display = "flex";

            setTimeout(function () {

                letterSection.scrollIntoView({
                    behavior: "smooth"
                });

            }, 300);

            // Show video after the letter
            setTimeout(function () {

                videoSection.classList.remove("hidden");
                videoSection.style.display = "flex";

            }, 1200);

        }, 500);

    });


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

        
        
