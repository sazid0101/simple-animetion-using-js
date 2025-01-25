function myMove(){
    const animate = document.getElementById("small");
    let pos = 0;

    const interval = setInterval(frame, 10);
    function frame(){
        if(pos<350){
        pos++;
        small.style.top = pos+ "px";
        small.style.left = pos+ "px";
        }else{
            clearInterval(interval)
        }
    }
}
// myMove();