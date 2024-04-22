radio.set_group(1)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        radio.send_number(15)
basic.forever(on_forever)
