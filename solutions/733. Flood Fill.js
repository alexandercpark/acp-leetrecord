/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
​
const DIRECTIONS = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
];
​
var floodFill = function(image, sr, sc, color) {
    // really ashsmed of this one, i need to revisit this
    let startingColour = image[sr][sc];
    if(startingColour === color) {
        return image;
    }
    let nodes = [[sr,sc]];
    let closedList = new Map();
    
    while(nodes.length > 0) {
        let [x,y] = nodes.pop();
        if(x < 0 || y < 0) {
            continue;
        }
        if(x > image.length - 1 || y > image[x].length - 1) {
            continue;
        }
        
        let node = image[x][y];
        if(closedList.get(x + "," + y)) {
            continue;
        }
        if(node != startingColour) {
            continue;
        }
        
        image[x][y] = color;
        for(let direction of DIRECTIONS) {
            let [deltaX, deltaY] = direction;
            nodes.push([x + deltaX, y + deltaY])
        }
    }
    
    return image;
};
