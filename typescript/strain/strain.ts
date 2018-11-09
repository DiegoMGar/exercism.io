function keep<T>(arg_list: T[], func: Function): T[] {
    return arg_list.filter((x: T) => func(x))
}

function discard<T>(arg_list: T[], func: Function): T[] {
    return arg_list.filter((x: T) => !func(x))
}

export { keep, discard }