input.onButtonPressed(Button.A, function () {
    if (power < 100) {
        power += 20
        radio.sendNumber(power)
    }
})
// south
input.onGesture(Gesture.LogoUp, function () {
    if (power > 0) {
        power += -20
        radio.sendNumber(power)
    }
})
input.onButtonPressed(Button.B, function () {
    if (power > 0) {
        power += -20
        radio.sendNumber(power)
    }
})
input.onGesture(Gesture.Shake, function () {
    power = 0
    radio.sendNumber(power)
})
// north
input.onGesture(Gesture.LogoDown, function () {
    if (power < 100) {
        power += 20
        radio.sendNumber(power)
    }
})
let power = 0
radio.setGroup(1)
radio.setTransmitPower(7)
radio.sendNumber(0)
power = 0
basic.forever(function () {
    led.plotBarGraph(
    power,
    100
    )
})
