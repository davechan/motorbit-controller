input.onButtonPressed(Button.A, function () {
    if (motor < 100) {
        motor += 20
        radio.sendValue("name", motor)
    }
})
// south
input.onGesture(Gesture.LogoUp, function () {
    if (motor > 0) {
        motor += -20
        radio.sendValue("name", motor)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    servo += 30
    radio.sendValue("name", servo)
})
input.onButtonPressed(Button.AB, function () {
    if (motor > 0) {
        motor = 100
        radio.sendValue("name", motor)
    }
})
input.onButtonPressed(Button.B, function () {
    if (motor > 0) {
        motor += -20
        radio.sendValue("name", motor)
    }
})
input.onGesture(Gesture.Shake, function () {
    motor = 0
    radio.sendValue("name", motor)
})
input.onGesture(Gesture.TiltRight, function () {
    servo += -30
    radio.sendValue("name", servo)
})
// north
input.onGesture(Gesture.LogoDown, function () {
    if (motor < 100) {
        motor += 20
        radio.sendValue("name", motor)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    servo = 0
    radio.sendValue("name", servo)
})
let motor = 0
let servo = 0
radio.setGroup(1)
radio.setTransmitPower(7)
servo = 0
motor = 0
basic.forever(function () {
    led.plotBarGraph(
    motor,
    100
    )
})
