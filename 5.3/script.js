console.log('5.3');

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
d3.csv('../data/world_bank_2013.csv',parse,function(err,rows){
    console.table(rows);

    var minGDPPerCap = d3.min(rows, function(d){ return d.gdpPerCap; }),
        maxGDPPerCap = d3.max(rows, function(d){ return d.gdpPerCap; });

    console.log(minGDPPerCap,maxGDPPerCap);

    var scaleX = d3.scaleLinear(),
        scaleY = d3.scaleLinear();

    scaleY.domain([0,100])
        .range([h,0]);

    scaleX.domain([minGDPPerCap,50000])
        .range([0,w]);

    rows.forEach(function(country){
        plot.append('circle')
            .attr('cx', scaleX(country.gdpPerCap))
            .attr('cy', scaleY(country.user))
            .attr('r',5)
            .style('fill-opacity',.7);
    })
});

//Write parse function
function parse(d){
    return {
        country: d.country,
        gdpPerCap: (+d.GDP_per_capita)?(+d.GDP_per_capita):undefined,
        user: (+d.internet_users_per_100)?(+d.internet_users_per_100):undefined
    }
}

//Mining for max and min

//Represent and draw
