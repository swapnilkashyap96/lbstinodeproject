


let a=document.querySelector('.loader');
window.addEventListener('load',function(){
    a.style.display='none';

})
















$(document).ready(function(){


    $(window).scroll(function(){

        if($(this).scrollTop()>40){

            $('.arrow').fadeIn()
        }
        else{

            $('.arrow').fadeOut()
        }
    })


    $(".arrow").click(function(){

        $('html,body').animate({scrollTop:0},800);

    });

    $('.toggle-btn').click(function(){

        $("#toggle-click").slideToggle(500);

    });











});
// let cur=document.querySelector('.cursor');
// document.addEventListener('mousemove',function(e){
//     cur.style.left=e.clientX +'px';
//     cur.style.top=e.clientY +'px';
// })

//  Slider Code Animation Javascript  //


let flag=0;

function controller (x){
    flag = flag + x ;
    slideanimation(flag);

}

slideanimation(flag);

function slideanimation(num){

    let slideanimate=document.getElementsByClassName('slide');
    if(num==slideanimate.length){

        flag=0;
        num=0;
    
    }

    if(num<0){
        flag=slideanimate.length-1;
        num=slideanimate.length-1;
    }


    for( let y of slideanimate){
        y.style.display="none";
    }
    
    slideanimate[num].style.display="block";

};