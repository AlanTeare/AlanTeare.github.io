// area

var dataArray =[25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYears = ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031'];

var height = 200;
var width = 500;

var area = d3.area()
      .x(function(d,i){return i*20;})
      .y0(height)
      .y1(function(d){return height -d; });

var svg = d3.select("body").append("svg")
      .attr("height", "100%")
      .attr("width", "100%");

svg.append("path").attr("d", area(dataArray));