let span = document.querySelectorAll(`span`)
let input = document.querySelectorAll(`input`)
let p = document.querySelectorAll(`label > p`)
let Proplem = document.querySelectorAll(`.Proplem `)
let btn = document.querySelector(`.btn`)
let res = document.querySelectorAll(`.res span`)
const birthday3 = new Date()
let aged = 0
let agem = 0
let agey = 0
btn.addEventListener(`click`, () => {
    const theDate = new Date(`${input[1].value} ${input[0].value} ${input[2].value}`)
    input.forEach((e, i) => {
        if (e.value == ``) {
            p[i].style.color = `red`
            e.style.border = `1px solid red`
            Proplem[i].style.opacity = `1`
        } else {
            p[i].style.color = ``
            e.style.border = ``
            Proplem[i].style.opacity = ``
        }
    })
    if (input[2].value > 2023) {
        Proplem[2].innerHTML = `must be in the past`
        p[2].style.color = `red`
        input[2].style.border = `1px solid red`
        Proplem[2].style.opacity = `1`
    }
    if (input[1].value > 12) {
        Proplem[1].innerHTML = `inter valid month`
        p[1].style.color = `red`
        input[1].style.border = `1px solid red`
        Proplem[1].style.opacity = `1`
    }
    if (input[1].value <= 12 && input[2].value <= 2023 && Proplem[0].style.opacity == ``) {
        aged = birthday3.getDate()
        agem = birthday3.getMonth()
        if (birthday3.getDate() < input[0].value) {
            agem -= 1
            if (input[1].value == 1 || input[1].value == 3 || input[1].value == 5 || input[1].value == 7 || input[1].value == 8 || input[1].value == 10 || input[1].value == 12) {
                aged += 31
            } else if (input[1].value == 2) {
                if (input[2].value % 2 == 0) {
                    if (input[2].value % 4 == 0) {
                        if (input[2].value % 100 == 0) {
                            if (input[2].value % 400 == 0) {
                                if (input[0].value <= 29) {
                                    aged += 29
                                }
                            } else {
                                if (input[0].value <= 28) {
                                    aged += 28
                                }
                            }
                        } else {
                            if (input[0].value <= 29) {
                                aged += 29
                            }
                        }
                    }
                } else {
                    if (input[0].value <= 28) {
                        aged += 28
                    }
                }
            } else if (input[1].value == 4 || input[1].value == 6 || input[1].value == 9 || input[1].value == 11) {
                aged += 30
            }
        }
        agey = birthday3.getFullYear()
        if ((agem - theDate.getMonth()) < 0) {
            agey -= 1
            agem += 12
        }
        res[0].innerHTML = agey - theDate.getFullYear()
        res[1].innerHTML = agem - theDate.getMonth()
        res[2].innerHTML = aged - theDate.getDate()
    }
    if (input[0].value > 32) {
        op()
        red()
    } else {
        if (input[1].value == 1 || input[1].value == 3 || input[1].value == 5 || input[1].value == 7 || input[1].value == 8 || input[1].value == 10 || input[1].value == 12) {
            if (input[0].value > 31) {
                op()
                red()
            }
        } else if (input[1].value == 2) {
            if (input[2].value % 2 == 0) {
                if (input[2].value % 4 == 0) {
                    if (input[2].value % 100 == 0) {
                        if (input[2].value % 400 == 0) {
                            if (input[0].value > 29) {
                                op()
                                red()
                            }
                        } else {
                            if (input[0].value > 28) {
                                op()
                                red()
                            }
                        }
                    } else {
                        if (input[0].value > 29) {
                            op()
                            red()
                        }
                    }
                }
            } else {
                if (input[0].value > 28) {
                    op()
                    red()
                }
            }
        } else {
            if (input[0].value > 31) {
                op()
                red()
            }
        }
    }
})
function op() {
    Proplem[0].innerHTML = `inter valid day`
    Proplem[0].style.opacity = `1`
}
function red() {
    p[0].style.color = `red`
    p[1].style.color = `red`
    p[2].style.color = `red`
    input[0].style.border = `1px solid red`
    input[1].style.border = `1px solid red`
    input[2].style.border = `1px solid red`
}