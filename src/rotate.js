function rotate(x, y, xm, ym, a) {
    var cos = Math.cos,
        sin = Math.sin,

        a = a * Math.PI / 180, // Convert to radians because that is what
                               // JavaScript likes

        // Subtract midpoints, so that midpoint is translated to origin
        // and add it in the end again
        xr = (x - xm) * cos(a) - (y - ym) * sin(a)   + xm,
        yr = (x - xm) * sin(a) + (y - ym) * cos(a)   + ym;

    return [xr, yr];
}

console.log(rotate(16, 32, 16, 16, 30)); // [8, 29.856...]