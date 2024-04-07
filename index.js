function rand(x,y) {
    return Math.floor(Math.random() * (x - y + 1)) + y;
}

module.exports = random;