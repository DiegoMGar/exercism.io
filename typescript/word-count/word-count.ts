class Words {
    count(phrase: string): Map<string, number> {
        const result = new Map<string, any>()
        const words = phrase.split(/\s+/g)
        for (let word of words) {
            if (word.length < 1) continue
            word = word.toLowerCase()
            let value = result.get(word) ? result.get(word) : 0
            result.set(word, value + 1)
        }
        return result
    }
}

export default Words