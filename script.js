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

var laserAvailableVar = true

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
        laserAvailableVar = false
        shoot_laser(imageleft, 0);
    }

}

function laserAvailable(){
    laserAvailableVar= true
}

var imgarray = [];

function shoot_laser(x, y){
    console.log("lase shot at " + x + "," + y);
    var img =  document.createElement('img');
    img.src = "laser.png";
    img.style.position = "fixed";
    img.style.width = 4 + "px";
    img.style.height = 15 + "px";
    var windowhigh = windowheight();
    console.log(windowhigh);
    img.style.top = windowhigh - 80;
    img.style.left = x + 28 + "px";
    imgarray.push(img);
    img.style.animationName = "laser_shot";
    img.style.animationDuration = "3s";
    document.getElementById("Ship_Hold").appendChild(img);
}

function updateHandler(){
    setInterval(updateImages, 50)
}

function updateImages(){
    for(i = 0; i < imgarray.length; i++){
        imgarray[i].style.top = imgarray[i].offsetTop - 20 +"px";
    }
}





//adding enemys

var ENEMYS = [];

function AddEnemy(){
    var enemy = document.createElement('img');
    enemy.src = "enemy.png";
    enemy.style.width = 80 + "px";
    enemy.style.height = 60 + "px";
    var xStart = enemy.offsetLeft;
    var yStart = enemy.offsetTop;
    var xEnd = enemy.offsetLeft + 60;
    var yEnd = enemy.offsetTop + 80;
    console.log("xs = " + xStart);
    console.log("ys = " + yStart);
    console.log("xe = " + xEnd);
    console.log("ye = " + yEnd);
    document.getElementById("Enemy_Hold").appendChild(enemy);
}