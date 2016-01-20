var pngCanvas = document.getElementById('canvas-png');
var svgCanvas = document.getElementById('canvas-svg');
var svgViewboxCanvas = document.getElementById('canvas-svg-viewbox');

var png = new Image();
png.onload = function() {
    pngCanvas.getContext('2d').drawImage(png, 0, 0);
};
png.src = 'circle.png';

var svg = new Image();
svg.onload = function() {
    svgCanvas.getContext('2d').drawImage(svg, 0, 0);
};
svg.src = 'circle.svg';

var svgV = new Image();
svgV.onload = function() {
    svgViewboxCanvas.getContext('2d').drawImage(svgV, 0, 0);
};
svgV.src = 'circle-viewbox.svg';
