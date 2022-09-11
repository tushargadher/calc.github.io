// console.log("This is Calculator");

showtime=()=>{

    let time=new Date();
    document.getElementById('time').innerHTML=time;
}
setInterval(showtime,1000);

let btn = document.getElementById('clear');



    btn.addEventListener('click', function display() {
        confirm("Clear Output?");
    });


    function vibrate(){
        if(navigator){
            navigator.vibrate(10);
        }
    }