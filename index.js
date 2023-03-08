document.getElementById('submitbtm').addEventListener('click', function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    document.getElementById('myCanvas').style.opacity = "1";
    text_name = document.getElementById('name').value;
    imageObj.onload = function(){
        ctx.drawImage(imageObj, 0, 0);
        ctx.font = "18pt Helvetica";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillText(text_name, (canvas.width/2)-5, 90);
    };
    imageObj.src = "nft_square.jpg"; 
});


/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("nft_image");
var text_name = "StackUp Name"

window.onload = function() {
   ctx.drawImage(img, 0, 0);
};

function DrawOverlay(img) {
    ctx.drawImage(img,0,0);
    ctx.fillStyle = 'rgba(30, 144, 255, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function DrawText() {
    ctx.fillStyle = "white";
    ctx.textBaseline = 'ideographic';
    ctx.font = "24px 'Helvetica'";
    ctx.textAlign = "center";
    ctx.fillText(text_name, 0, 50, 14);
}
function DynamicText(img) {
  document.getElementById('submitbtm').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawOverlay(img);
    DrawText();
    text_name = document.getElementById('name').value;
    ctx.fillText(text_title, 50, 50);
  });
} */