document.getElementById('submitbtm').addEventListener('click', function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    document.getElementById('sample').style.display = 'none';
    document.getElementById('myCanvas').style.display = 'block';
    text_name = document.getElementById('name').value;
    imageObj.onload = function(){
        ctx.drawImage(imageObj, 0, 0);
        ctx.font = "36pt alataregular";
        ctx.fillStyle = '#004aad';
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillText(text_name, (canvas.width/2)-5, 180);
    };
    imageObj.src = "nft_square.jpg"; 
});