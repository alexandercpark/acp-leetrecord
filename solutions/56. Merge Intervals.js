/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // not too proud of this solution... but it works
    // ny way to clean this up?
    
    // sort by start times
    intervals.sort((a,b) => a[0] - b[0]);
    let merged = [];
    
    for(let i = 0; i < intervals.length; i++) {
        // since we already sorted by start times
        // we are guarenteed that the start here is already the correct
        // beginning of the new interval
        let [start, end] = intervals[i];
        
        // find any overlaps, and merge this until we can't
        // overlap intervals anymore.
        while(i < intervals.length - 1 && end >= intervals[i+1][0]) {
            i++;
            end = Math.max(end, intervals[i][1]);
        }
        
        merged.push([start, end])
    }
    
    return merged;
};
