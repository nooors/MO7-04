// ... "spread operator" means every element of the list
const ratingStars = [...document.getElementsByClassName("star__icon")];
const container = document.getElementById("container");


function turnOnOffStars(stars) {
    const starClassOn = "star__icon fas fa-star";
    const starClassOff = "star__icon far fa-star";
    const starLength = stars.length;

    container.addEventListener("click", (e) => {
        if (e.target.className === "rating"){
            for(element of ratingStars){
                element.className = starClassOff;
            }
        }
    })
    let i;

    stars.map((star) => {
        star.addEventListener("click", () => {
            i = stars.indexOf(star);
            if (star.className === starClassOff) {
                for (i; i < starLength; ++i) stars[i].className = starClassOn;
            } else {
                for (i; i >= 0; --i) stars[i].className = starClassOff;
            }
        })
    });
}


turnOnOffStars(ratingStars);
