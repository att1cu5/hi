input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
let v = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeValue("x", Math.constrain(input.rotation(Rotation.Roll), -150, 150))
    v = Math.constrain(input.rotation(Rotation.Roll), -150, 150)
    v = pins.map(
    v,
    0,
    255,
    1023,
    0
    )
    pins.analogWritePin(AnalogPin.P0, v)
})
