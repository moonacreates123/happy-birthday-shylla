document.addEventListener("DOMContentLoaded", function () {

    const beginButton = document.getElementById("begin-button");
    const introContent = document.querySelector(".intro-content");
    const giftSection = document.getElementById("gift-section");
    const giftBox = document.getElementById("gift-box");
    const letterSection = document.getElementById("letter-section");


    // START
    introContent.style.display = "block";

    giftSection.style.setProperty(
        "display",
        "none",
        "important"
    );

    letterSection.style.setProperty(
        "display",
        "none",
        "important"
    );


    // BEGIN THE SURPRISE
    beginButton.addEventListener("click", function () {

        introContent.style.display = "none";

        giftSection.classList.remove("hidden");

        giftSection.style.setProperty(
            "display",
            "flex",
            "important"
        );

    });


    // OPEN THE GIFT
    giftBox.addEventListener("click", function () {

        giftBox.style.animation =
            "giftOpen 0.5s ease forwards";

        createConfetti();


        setTimeout(function () {

            giftBox.style.display = "none";


            document.querySelector(".gift-message").innerHTML =
                "Happy 20th Birthday,<br><span>Shylla</span>";


            document.querySelector(".tap-message").textContent =
                "Your surprise has only just begun...";


            // SHOW LETTER
            letterSection.classList.remove("hidden");

            letterSection.style.setProperty(
                "display",
                "flex",
                "important"
            );


            // Scroll smoothly to the letter
            setTimeout(function () {

                letterSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 300);


        }, 500);

    });


    // CONFETTI
    function createConfetti() {

        for (let i = 0; i < 80; i++) {

            const confetti =
                document.createElement("div");

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
