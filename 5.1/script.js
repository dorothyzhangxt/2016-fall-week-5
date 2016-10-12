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
var outerWidth = document.getElementById('canvas').clientWidth,
    outerHeight = document.getElementById('canvas').clientHeight;
var w = outerWidth - m.l - m.r,
    h = outerHeight - m.t - m.b;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',outerWidth)
    .attr('height',outerHeight)
    .append('g')
    .attr('transform','translate(' + m.l + ',' + m.t + ')');

arr.forEach(function(d){
    console.log(d);

    plot.append('circle')
        .attr('cx', d.a * w)
        .attr('cy', d.b * h)
        .attr('r', d.c * 10);
});