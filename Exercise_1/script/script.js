/*Start by setting up the canvas */
var margin = {t:50,r:50,b:50,l:50};
var width = document.getElementById('plot').clientWidth - margin.r - margin.l,
    height = document.getElementById('plot').clientHeight - margin.t - margin.b;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',width+margin.r+margin.l)
    .attr('height',height + margin.t + margin.b)
    .append('g')
    .attr('class','canvas')
    .attr('transform','translate('+margin.l+','+margin.t+')');

//Rectangle
plot.append('rect')
    .attr('x',100-50)
    .attr('y',height/2-50)
    .attr('width',100)
    .attr('height',100)
    .attr('class','no-fill');

plot.append('circle')
    .attr('cx',250)
    .attr('cy',height/2)
    .attr('r',50);

var group = plot.append('g');

group.append('circle')
    .attr('cx',400)
    .attr('cy',height/2)
    .attr('r',50)
    .attr('class','no-fill');

group.append('circle')
    .attr('cx',550)
    .attr('cy',height/2)
    .attr('r',50);
