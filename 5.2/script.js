console.log('5.2');

//First, append <svg> element and implement the margin convention
var m = {t:50,r:50,b:50,l:50},
    w = document.getElementById('canvas').clientWidth - m.l - m.r,
    h = document.getElementById('canvas').clientHeight - m.t - m.b;

var plot = d3.select('.canvas').append('svg')
    .attr('width',w+ m.l+ m.r)
    .attr('height',h+ m.t+ m.b)
    .append('g')
    .attr('transform','translate('+ m.l+','+ m.t+')');

//Import data...
d3.csv('../data/data-2.csv', parse, function(error,rows){
    console.table(rows);

});

function parse(d){
    if(d.x ){

    }

    return {
        x: (+d.x)?(+d.x):undefined,
        y: +(d.y.slice(2))
    }
}