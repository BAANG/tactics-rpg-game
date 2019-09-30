module.exports = function Pokemon (name, type, stats, moveset = []) {
    this.name = name,
    this.type = type,
    this.stat = stats,
    this.moveset = moveset
}

