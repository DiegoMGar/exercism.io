export default class Converter {
    constructoBaser() { }
    convert(nums: number[], fromBase: number, toBase: number): number[] {
        if (!this.isValidBase(fromBase)) throw new Error("Wrong input base")
        if (!this.isValidBase(toBase)) throw new Error("Wrong output base")
        if (!this.isValidInput(nums, fromBase)) throw new Error('Input has wrong format')
        let base10 = nums.reduce((previous: number, current: number): number => previous * fromBase + current, 0)
        if (toBase == 10) return base10.toString().split('').map((x: string): number => parseInt(x))
        const result: number[] = []
        do {
            result.push(base10 % toBase)
            base10 = Math.floor(base10 / toBase)
        } while (base10 > 0)
        return result.reverse()
    }
    isValidBase(base: number): boolean {
        return base > 1 && base == Math.floor(base)
    }
    isValidInput(nums: number[], fromBase: number): boolean {
        return nums.length > 0 && !(nums.length > 1 && nums[0] === 0) &&
            nums.every((d) => 0 <= d && d < fromBase)
    }
}