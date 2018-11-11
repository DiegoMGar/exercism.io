export default <T>(arr: T[], fn: Function): T[] => {
    const result: T[] = []
    for (const x of arr.values()) { result.push(fn(x)) }
    return result
}