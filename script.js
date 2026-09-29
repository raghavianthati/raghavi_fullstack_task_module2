```javascript
// ==========================================
// FESTIVAL DATA
// ==========================================

const festivals = {

    lohri: {

        title: "Lohri",

        date: "13 January 2026",

        description:
            "Lohri is a winter festival celebrated especially in North India. It is traditionally associated with bonfires, music, dancing and seasonal harvest celebrations.",

        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",

        website:
            "https://en.wikipedia.org/wiki/Lohri"

    },


    sankranti: {

        title: "Makar Sankranti",

        date: "14 January 2026",

        description:
            "Makar Sankranti is a major Indian festival associated with the Sun's transition into Makara (Capricorn). Different regions celebrate it with different traditions.",

        image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80",

        website:
            "https://en.wikipedia.org/wiki/Makar_Sankranti"

    },


    pongal: {

        title: "Pongal",

        date: "15 January 2026",

        description:
            "Pongal is a major Tamil harvest festival. It is celebrated over several days with traditional food, decorations, family gatherings and thanksgiving to nature and cattle.",

        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

        website:
            "https://en.wikipedia.org/wiki/Pongal_(festival)"

    },


    thiruvalluvar: {

        title: "Thiruvalluvar Day",

        date: "16 January 2026",

        description:
            "Thiruvalluvar Day is observed in Tamil Nadu in remembrance of the Tamil poet and philosopher Thiruvalluvar, traditionally associated with the work Thirukkural.",

        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80",

        website:
            "https://en.wikipedia.org/wiki/Thiruvalluvar"

    },


    uzhavar: {

        title: "Uzhavar Thirunal",

        date: "17 January 2026",

        description:
            "Uzhavar Thirunal is associated with farmers and agricultural traditions in Tamil Nadu and is observed as part of the Pongal period.",

        image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",

        website:
            "https://en.wikipedia.org/wiki/Pongal_(festival)"

    },


    republic: {

        title: "Republic Day",

        date: "26 January 2026",

        description:
            "India's Republic Day is observed on 26 January to commemorate the Constitution of India coming into effect in 1950.",

        image:
            "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=80",

        website:
            "https://www.india.gov.in/"

    }

};


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const festivalDates =
    document.querySelectorAll(".festival");

const modal =
    document.getElementById("festivalModal");

const closeModal =
    document.getElementById("closeModal");

const festivalImage =
    document.getElementById("festivalImage");

const festivalTitle =
    document.getElementById("festivalTitle");

const festivalDate =
    document.getElementById("festivalDate");

const festivalDescription =
    document.getElementById("festivalDescription");

const festivalWebsite =
    document.getElementById("festivalWebsite");


// ==========================================
// CLICK FESTIVAL DATE
// ==========================================

festivalDates.forEach(function (date) {

    date.addEventListener("click", function () {

        const festivalId =
            this.getAttribute("data-festival");

        const festival =
            festivals[festivalId];


        if (!festival) {

            return;

        }


        // Set festival image

        festivalImage.src =
            festival.image;

        festivalImage.alt =
            festival.title;


        // Set festival information

        festivalTitle.textContent =
            festival.title;

        festivalDate.textContent =
            festival.date;

        festivalDescription.textContent =
            festival.description;


        // Set website

        festivalWebsite.href =
            festival.website;


        // Show modal

        modal.style.display =
            "flex";

    });

});


// ==========================================
// CLOSE MODAL
// ==========================================

closeModal.addEventListener(
    "click",
    function () {

        modal.style.display =
            "none";

    }
);


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE
// ==========================================

window.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.style.display =
                "none";

        }

    }
);


// ==========================================
// ESC KEY CLOSE
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            modal.style.display =
                "none";

        }

    }
);
```
