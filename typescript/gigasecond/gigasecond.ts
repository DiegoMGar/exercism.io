class Gigasecond {
    private gigasecond: number = 1000000000
    constructor(private fecha: Date) {
    }
    date() {
        const result = new Date()
        result.setTime(this.fecha.getTime() + this.gigasecond * 1000)
        return result
        return 0;
    }
}

export default Gigasecond