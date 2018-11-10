class FlattenArray {
    static flatten(arr: any): any[] {
        return this.flat_recursive(arr)
    }
    static flat_recursive(elem: any): any {
        if (!Array.isArray(elem))
            return elem
        let result: number[] = []
        for(const x of elem.values()){
            if(x !== undefined){
                if(!Array.isArray(x))
                    result.push(x)
                else
                    result = result.concat(this.flat_recursive(x))
            }
        }
        return result
    }
}
export default FlattenArray