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
    let image = document.getElementById("Player_Ship");
    let imagecomputed = getComputedStyle(image);
    let imageleft = parseInt(imagecomputed.left)
    console.log(imageleft)
    if(keycode == 39){
        document.getElementById("Player_Ship").style.left =  imageleft + 15 + "px";
    }
    if(keycode == 37){
        if(imageleft > 0){
            document.getElementById("Player_Ship").style.left = imageleft - 15 + "px";
        }
    }

}