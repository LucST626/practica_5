function gradientColor(){
    const R1 = document.querySelector("#R-input")
    const G1 = document.querySelector("#G-input")
    const B1 = document.querySelector("#B-input")
    const R2 = document.querySelector("#R-input")
    const G2 = document.querySelector("#G-input")
    const B2 = document.querySelector("#B-input")
    const color_square = document.querySelector("#color-output")

    color_square.style.background = `liner-gradient(${R1.value},${G1.value},${B1.value},${R2.value},${G2.value},${B2.value})`
}