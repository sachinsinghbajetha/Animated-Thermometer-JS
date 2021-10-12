const tempLoad = () => {
    let temp = document.getElementById("temp");
    temp.innerHTML = "<i class='fas fa-thermometer-empty'></i>";
    temp.style.color = "white";

    setTimeout(() => {
        temp.innerHTML = "<i class='fas fa-thermometer-quarter'></i>";
        temp.style.color = "green";
    }, 500);
    setTimeout(() => {
        temp.innerHTML = "<i class='fas fa-thermometer-half'></i>";
        temp.style.color = "yellow";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = "<i class='fas fa-thermometer-three-quarters'></i>";
        temp.style.color = "orange";
    }, 1500);
    setTimeout(() => {
        temp.innerHTML = "<i class='fas fa-thermometer-full'></i>";
        temp.style.color = "red";
    }, 2000);
};

tempLoad();

setInterval(tempLoad, 2500);
