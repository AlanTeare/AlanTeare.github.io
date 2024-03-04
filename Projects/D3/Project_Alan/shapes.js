var dataArray = [5, 11, 18];
var dataDays = ['Monday', 'Tuesday', 'Wednesday'];


// colores de los gráficos
var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);
var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([1, 3]);
var cat20 = d3.schemeCategory20;


var x = d3.scaleBand()
      .domain(dataDays)
      .paddingInner(0.1176)
      .range([0, 170]);

var xAxis = d3.axisBottom(x);


var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");




svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
      .attr("height", function (d, i) { return d * 15; })
      .attr("width", "50")
      .attr("fill", function (d, i) { return rainbow(i); })
      .attr("x", function (d, i) { return 60 * i; })
      .attr("y", function (d, i) { return 300 - (d * 15); });

svg.append("g")
      .attr("class", "x axis hidden")
      .attr("transform", "translate(0, 300)")
      .call(xAxis);

var newX = 300;

svg.selectAll("circle.first")
      .data(dataArray)
      .enter().append("circle")
      .attr("class", "first")
      .attr("cx", function (d, i) { newX += (d * 6) + (i + 20); return newX; })
      .attr("cy", "100")
      .attr("fill", function (d, i) { return rainbow2(i); })
      .attr("r", function (d) { return d * 3; });

var newX = 600;

svg.selectAll("ellipse")
      .data(dataArray)
      .enter().append("ellipse")
      .attr("class", "second")
      .attr("cx", function (d, i) { newX += (d * 6) + (i + 20); return newX; })
      .attr("cy", "100")
      .attr("fill", function (d, i) { return cat20[i]; })
      .attr("rx", function (d) { return 8; })
      .attr("ry", function (d) { return d * 1; });


var newX = 1000;

svg.selectAll("line")
      .data(dataArray)
      .enter().append("line")
      // .style("stroke","green") //  medoto 1 segunda  opción
      // .attr("stroke-width","2") // metodo 2 tercera opción
      // metodo es con CCS , mejor opción 
      .attr("x1", newX)
      .attr("y1", function (d, i) { return 80 + (i * 20); })
      .attr("x2", function (d) { return newX + (d * 15); })
      .attr("y2", function (d, i) { return 80 + (i * 20); })
      .attr("color", "red");

var textArray = ["Hello", "World!", "Alan está aprendiendo", "D3.js"]
svg.append("text").selectAll("tspan")
      .data(textArray)
      .enter().append("tspan")
      .attr("x", newX)
      .attr("y", function (d, i) { return 150 + (i * 30); })
      .attr("text-anchor", "start")
      // .attr("font-size","30")
      .text(function (d) { return d; })


