class BracketPush {
    constructor(private text: string) { }
    isPaired(): boolean {
        const aperturas = new Map<string, string>(Object.entries({ '[': ']', '(': ')', '{': '}' }))
        const cierres = [']', '}', ')']
        let toClose: string[] = []
        let result: boolean = true
        this.text.split('').find((x: string): boolean => {
            const actual = aperturas.get(x)
            if (actual) {
                toClose.push(actual)
            } else if (cierres.includes(x)) {
                if (x != toClose.pop()) {
                    result = false
                    return true
                }
            }
            return false
        })
        if (toClose.length > 0)
            result = false
        return result;
    }
}
export default BracketPush