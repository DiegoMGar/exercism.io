class HelloWorld {
    static hello(name?: any) {
        if (!name)
            name = "World"
        return "Hello, " + name + "!"
    }
}

export default HelloWorld