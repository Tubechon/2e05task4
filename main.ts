let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    while (x_value <= 6) {
        led.plot(x_value, 0)
        basic.pause(200)
        basic.clearScreen()
        x_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    y_value = 0
    while (y_value <= 6) {
        led.plot(0, y_value)
        basic.pause(200)
        basic.clearScreen()
        y_value += 1
    }
})
