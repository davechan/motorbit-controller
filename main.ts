input.onButtonPressed(Button.A, function () {
    if (speed < 100) {
        speed += 20
        radio.sendValue("motor", speed)
    }
})
// south
input.onGesture(Gesture.LogoUp, function () {
    if (speed > 0) {
        speed += -20
        radio.sendValue("motor", speed)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    angle += 15
    radio.sendValue("servo", angle)
})
input.onButtonPressed(Button.AB, function () {
    if (speed < 100) {
        speed += 30
        radio.sendValue("motor", speed)
    }
})
input.onButtonPressed(Button.B, function () {
    if (speed > 0) {
        speed += -20
        radio.sendValue("motor", speed)
    }
})
input.onGesture(Gesture.Shake, function () {
    speed += -25
    radio.sendValue("motor", speed)
})
input.onGesture(Gesture.TiltRight, function () {
    angle += -15
    radio.sendValue("servo", angle)
})
// north
input.onGesture(Gesture.LogoDown, function () {
    if (speed < 100) {
        speed += 20
        radio.sendValue("motor", speed)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    angle = 90
    radio.sendValue("servo", angle)
})
let speed = 0
let angle = 0
radio.setGroup(1)
radio.setTransmitPower(7)
angle = 90
radio.sendValue("servo", angle)
speed = 0
basic.forever(function () {
    led.plotBarGraph(
    speed,
    100
    )
})
