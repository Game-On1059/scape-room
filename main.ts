radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        radio.sendNumber(15)
    }
})
