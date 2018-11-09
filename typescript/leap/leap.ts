function isLeapYear(year: number) {
    return (!(year % 400) || (!(year % 4) && (year % 100)))
}

export default isLeapYear