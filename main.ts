input.onButtonPressed(Button.A, function () {
    if (speed < 100) {
        speed += 20
        radio.sendValue("motor", speed)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    angle += -15
    radio.sendValue("servo", angle)
})
input.onSound(DetectedSound.Loud, function () {
    if (speed >= 0) {
        speed += -25
        radio.sendValue("motor", speed)
    }
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
input.onGesture(Gesture.TiltRight, function () {
    angle += 15
    radio.sendValue("servo", angle)
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
input.setSoundThreshold(SoundThreshold.Loud, 145)
speed = 0
basic.forever(function () {
    led.plotBarGraph(
    speed,
    100
    )
})
