class ArmstrongNumbers {
    static isArmstrongNumber(n: number) {
        const n_str = n.toString()
        const l = n_str.length
        let result = 0
        n_str.split('').find((c: string) => {
            result += parseInt(c) ** l
            return result > n
        })
        return result == n
    }
}

export default ArmstrongNumbers