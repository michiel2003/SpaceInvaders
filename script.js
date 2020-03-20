function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
//maybe add sound later

function windowheight(){
    return window.innerHeight;
}
function windowwidht(){
    return window.innerWidth;
}



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    var keycode = e.keyCode;
    var stringcode = String.fromCharCode(keycode);
    console.log("keycode = " + keycode);
    console.log("keycode to text = " + stringcode);
    let image = document.getElementById("Player_Ship")
    let compImage = window.getComputedStyle(image)
    if(keycode == 37){
        var newleft = compImage.left + uni;
        document.getElementById("Player_Ship").style.left = compImage.left + 100;
        console.log(document.getElementById("Player_Ship").style.left)
        console.log(compImage.left)
        console.log(newleft)
    }
    if(keycode == 39){
        document.getElementById("Player_Ship").style.left =  document.getElementById("Player_Ship").style.left + 100 + "px"
    }

}