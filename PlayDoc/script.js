var istatus = document.querySelector("h2");
var btn = document.querySelector("button");
var st = 0;

btn.addEventListener("click", function () {
    if (st == 0) {
        istatus.innerHTML = "Friends..!!";
        istatus.style.color = "green";
        btn.innerHTML = "Remove";
        btn.style.backgroundColor = "#ff7300";
        btn.style.transition = "background-color 0.3s";
        st = 1;
    } else {
        istatus.innerHTML = "Strangers..!!";
        istatus.style.color = "red";
        btn.innerHTML = "Add";
        btn.style.backgroundColor = "#08e8de";
        btn.style.transition = "background-color 0.3s";
        st = 0;
    }
});
btn.addEventListener("mouseover", function () {
    if (st == 1) {
        btn.style.backgroundColor = "#08e8de";
    }
});

btn.addEventListener("mouseout", function () {
    if (st == 1) {
        btn.style.backgroundColor = "#ff7300";
    }
});
