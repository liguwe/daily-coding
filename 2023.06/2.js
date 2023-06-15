var findMinArrowShots = function(points) {
    if (!points.length) return 0

    points.sort((a, b) => {
        return a[1] - b[1]
    })

    let count = 1;
    let x = points[0][1];

    for (let i = 1; i < points.length; i++) {
        // :::: 不相交
        if (points[i][0] > x || x > points[i][1]) {
            x = points[i][1]
            count += 1
        }
    }

    return count
};
