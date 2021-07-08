canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";


ctx.beginPath();
ctx.strokeStyle="gray";
ctx.lineWidth=1;
ctx.rect(190, 190, 430, 200);
ctx.stroke();


function circle(){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(290, 270,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(390, 271, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(490, 272, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(340, 310, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(440, 310, 40, 0, 2*Math.PI)
ctx.stroke();