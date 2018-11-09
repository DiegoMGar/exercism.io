class RunLengthEncoding {
    static encode(phrase: string): string {
        if (phrase.length < 1) return ''
        let result: string[] = []
        let current_char: string = phrase.charAt(0)
        let contador: number = 0
        phrase.split('').map((x: string): void => {
            if (x == current_char) {
                contador += 1
            } else {
                result.push((contador == 1 ? '' : contador) + current_char)
                current_char = x
                contador = 1
            }
        })
        result.push((contador == 1 ? '' : contador) + current_char)
        return result.join('')
    }
    static decode(phrase: string): string {
        if (phrase.length < 1) return ''
        const re_letters = /([0-9]*)[^a-z ]*([a-z ]{1})/ig
        let result: string = ''
        let nums: string[] | null
        while ((nums = re_letters.exec(phrase)) !== null) {
            if (nums[1] === '') nums[1] = '1'
            result = result.padEnd(result.length + parseInt(nums[1]), nums[2])
        }
        return result
    }
}

export default RunLengthEncoding