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
        let copy = this.num
        let result = 0
        while (copy > 0) {
            result += copy--
        }
        return result ** 2
    }
    get calc_sumOfSquares(): number {
        let copy = this.num
        let result = 0
        while (copy > 0) {
            result += (copy--) ** 2
        }
        return result
    }
    get calc_difference(): number {
        return this.squareOfSum - this.sumOfSquares
    }
}

export default Squares