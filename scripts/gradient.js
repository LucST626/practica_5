function gradientColor() {
    const R1 = document.querySelector("#R1-input").value;
    const G1 = document.querySelector("#G1-input").value;
    const B1 = document.querySelector("#B1-input").value;
    const R2 = document.querySelector("#R2-input").value;
    const G2 = document.querySelector("#G2-input").value;
    const B2 = document.querySelector("#B2-input").value;
    const grad = document.querySelector("#gradient-deg").value;
    const color_square = document.querySelector("#gradient");

    console.log(R1, G1, B1, R2, G2, B2);

    color_square.style.background = `linear-gradient(${grad}deg, rgb(${R1},${G1},${B1}), rgb(${R2},${G2},${B2}))`;
}