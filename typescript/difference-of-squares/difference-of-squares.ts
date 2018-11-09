class Squares {
    public squareOfSum: number
    public sumOfSquares: number
    public difference: number
    constructor(private num: number) {
        this.squareOfSum = this.calc_squareOfSum
        this.sumOfSquares = this.calc_sumOfSquares
        this.difference = this.calc_difference
    }
    get calc_squareOfSum(): number {
        return ((this.num * (this.num + 1) / 2) ** 2)
    }
    get calc_sumOfSquares(): number {
        return (this.num * (this.num + 1) * (2 * this.num + 1) / 6)
    }
    get calc_difference(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}

export default Squares