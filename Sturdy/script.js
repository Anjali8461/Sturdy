
// var video=document.querySelector(".babykeem .videoo video");
// video.addEventListener("mouseover",function(){
//     video.play();
// });
// video.addEventListener("mouseout",function(){
//     video.pause();
// });
var page3=document.querySelector(".page3 .overlay");
var cursor=document.querySelector(".cursor");
page3.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
})