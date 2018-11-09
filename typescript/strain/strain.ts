function keep<T>(arg_list: T[], func: Function): T[] {
    const result = []
    for(const x in arg_list){
        if(func(arg_list[x])){
            result.push(arg_list[x])
        }
    }
    return result
}

function discard<T>(arg_list: T[], func: Function): T[] {
    const result = []
    for(const x in arg_list){
        if(!func(arg_list[x])){
            result.push(arg_list[x])
        }
    }
    return result
}

export { keep, discard }