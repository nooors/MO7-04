const stars = document.getElementsByName("i");
const elementListenerParent = document.querySelector(".container");

// The listener added to a parent will be spread to all his children (or not?)
elementListenerParent.addEventListener ("mouseover", (e) => {
    console.log(e);
    console.log(e.target);
    if(e.target && e.target.tagName === "I") {
        e.target.classList.toggle("active");
    }
});

elementListenerParent.addEventListener("mouseout", (e) => {
    console.log(e);
    if(e.target && e.target.tagName === "I"){
        e.target.classList.toggle("active");
    }
})