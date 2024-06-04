const calcInterest = (salary, interest) => {
    return salary * (interest.substring(0, 2) / 100)
}

console.log(calcInterest(15000, '15%'))
