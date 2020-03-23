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
    let imageleft = parseInt(imagecomputed.left);
    let imageright = Math.abs(parseInt(imagecomputed.right));
    console.log(imageleft)
    console.log(imageright)
    console.log(windowwidht());
    if(keycode == 39){
        if(imageright < windowwidht() - 65){
            document.getElementById("Player_Ship").style.left =  imageleft + 10 + "px";
        }
    }
    if(keycode == 37){
        if(imageleft > 0){
            document.getElementById("Player_Ship").style.left = imageleft - 10 + "px";
        }
    }
    if(keycode == 32){
        console.log("laser fired")
        shoot_laser(imageleft, 0);
    }

}

function shoot_laser(x, y){
    console.log("lase shot at " + x + "," + y);
    var img =  document.createElement('img');
    img.src = "laser.png";
    img.style.position = "relative";
    img.style.width = 4 + "px";
    img.style.height = 15 + "px";
    img.style.top = 800 + "px";
    img.style.bottom = y + "px";
    x = x  - 15
    img.style.left = x + "px";
    document.body.appendChild(img)
}