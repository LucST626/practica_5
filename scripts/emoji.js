function randomEmoji(){
    const emojis = ["🕊","✡","☠","🕷","⚛"]
    //generar un nº aleatorio entre 0 y la longitud del array emojis
    const randomNumber = Math.floor (Math.random() * emojis.length) //0 ~ longitud del array
    console.log(emojis[randomNumber])
}