document.getElementById('submitbtm').addEventListener('click', function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    document.getElementById('sample').style.display = 'none';
    document.getElementById('tweet').style.opacity = '1';
    document.getElementById('myCanvas').style.display = 'block';
    text_name = document.getElementById('name').value;
    imageObj.onload = function(){
        ctx.drawImage(imageObj, 0, 0);
        ctx.font = "40pt alataregular";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillText(text_name, (canvas.width/2)-5, 180);
    };
    imageObj.src = "nft_square_stackup.png"; 
});

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));