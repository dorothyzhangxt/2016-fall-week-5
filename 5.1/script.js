console.log('5.1');

//Let's represent this array of objects
var arr = [];
for(var i=0; i<50; i++){
    var a = Math.random();
    arr.push({
        a:a,
        b:Math.sin(a*Math.PI*2)/2 +.5,
        c:Math.random()
    });
}

//First, append <svg> element and implement the margin convention
var m = {t:50,r:50,b:50,l:50};