function changeBodyColor(xCoordinate, yCoordinate) {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const red = Math.round(xCoordinate / innerWidth * 255);
    const blue = Math.round(yCoordinate / innerHeight * 255);
    //const green = Math.round((red + blue) / 2);
    const color = `rgb(${red}, 0, ${blue})`;
    document.body.style.backgroundColor = color;
    console.log(color);
}

document.addEventListener('mousemove', function(event) {
    changeBodyColor(event.clientX, event.clientY);
});