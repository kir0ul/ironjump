/* var platforms = [
 *   {
 *     x: 0,
 *     y: 1000,
 *     width: 1000
 *   },
 *   {
 *     x: 400,
 *     y: 500,
 *     width: 200
 *   },
 *   {
 *     x: 600,
 *     y: -100,
 *     width: 200
 *   },
 *   {
 *     x: 800,
 *     y: 0,
 *     width: 200
 *   },
 *   {
 *     x: 300,
 *     y: -250,
 *     width: 200,
 *     color: "rgb(255, 60, 60)"
 *   },
 *   {
 *     x: 0,
 *     y: -500,
 *     width: 200
 *   },
 *   {
 *     x: 150,
 *     y: -750,
 *     width: 200,
 *     color: "rgb(100, 110, 255)"
 *   },
 *   {
 *     x: 0,
 *     y: -1000,
 *     width: 200
 *   },
 *   {
 *     x: 400,
 *     y: -1500,
 *     width: 200
 *   },
 *   {
 *     x: 400,
 *     y: -2000,
 *     width: 200
 *   },
 *   {
 *     x: 600,
 *     y: -2500,
 *     width: 200
 *   },
 *   {
 *     x: 400,
 *     y: -3000,
 *     width: 200
 *   },
 *   {
 *     x: 600,
 *     y: -3500,
 *     width: 200
 *   },
 *   {
 *     x: 400,
 *     y: -4000,
 *     width: 200
 *   },
 * ] */



var platforms = [
    {
        x: 0,
        y: 1500,
        width: 1000
    },
    {
        x: 200,
        y: 1100,
        width: 400
    },
    {
        x: 400,
        y: 700,
        width: 400
    },
    {
        x: 200,
        y: 300,
        width: 400
    }
    
];
var fullwidth = 1000;
var minWidth = 200;
var maxWidth = 400;

// Example of random generation of platforms
// You can comment it / uncomment it
for (var y = 100; y > -100000; y -= 400) {
    var color;
    var r = Math.random();
    if (r < 0.6) {
        color = "black";
    }
    else if (r < 0.8) {
        color = "rgb(255, 60, 60)";
    }
    else {
        color = "rgb(100, 110, 255)";
    }
    var width = Math.random()*(maxWidth - minWidth) + minWidth;
    
    platforms.push({
        x: Math.random()*(fullwidth-width),
        y,
        width: width,
        color
    });
}
