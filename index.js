import { select, arc } from 'd3';

const svg = d3.select('svg');



// + = parseFloat

const height = +svg.attr('height');
const width = +svg.attr('width');

const g = svg.append('g')
	.attr('transform', `translate(${width / 2}, ${height / 2})`);

console.log(typeof height);

const circle = g.append('circle');
circle
  .attr('r', height / 2)
	.attr('fill', 'yellow')
	.attr('stroke','#000');

const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 30;
const eyebrowWidth = 50;
const eyebrowHeight = 20;
const eyebrowYOffset = -70;

const eyeGroup = g.append('g')
	.attr('transform', `translate(0, ${eyeYOffset})`);


const leftEye = eyeGroup.append('circle');
leftEye
  .attr('r', eyeRadius)
  .attr('cx', - eyeSpacing)



const rightEye = eyeGroup.append('circle');
rightEye
  .attr('r', eyeRadius)
  .attr('cx', eyeSpacing)



const eyebrowGroup = eyeGroup
  .append('g')
	.attr('transform', `translate(0, ${eyebrowYOffset})`);

eyebrowGroup
.transition().duration(500)
	.attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
.transition().duration(500)
  .attr('transform', `translate(0, ${eyebrowYOffset})`)

const leftEyebrow = eyebrowGroup.append('rect')
  .attr('x', -eyeSpacing - eyebrowWidth / 2)
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight);

const rightEyebrow = eyebrowGroup.append('rect')
  .attr('x', eyeSpacing - eyebrowWidth / 2)
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight);






const mouth = g.append('path') 
	.attr('d', arc()({ 
    innerRadius: 110,
    outerRadius: 130,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2
  }));