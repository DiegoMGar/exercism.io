// What is 2 multiplied by -2 multiplied by 3?
class ArgumentError extends Error { }
class WordProblem {
    constructor(public question: string) {
        const re = /([0-9]+) [a-z]+/ig //TODO
        const aggroupation: string[]|null = re.exec(question)
    }
    answer() { }
}

export { WordProblem, ArgumentError }