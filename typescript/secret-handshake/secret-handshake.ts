export default class HandShake {
    public order: string[]
    public handshake: string[] = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse']
    constructor(order: number) {
        this.order = order.toString(2).split('').reverse()
    }
    commands(): string[] {
        let result: string[] = []
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i] == '1') {
                result.push(this.handshake[i])
            }
        }
        if (result[result.length - 1] == 'reverse') {
            result.pop()
            result.reverse()
        }
        return result
    }
}