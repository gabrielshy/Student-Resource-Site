const char = document.getElementById("char");

window.onload = (event) => {
    const chars = [
        "../images/char1.png",
        "../images/char2.png",
        "../images/char3.png"
    ];

    let randomIndex = Math.floor(
        Math.random() * chars.length
    );
    
    char.src = chars[randomIndex];
}

