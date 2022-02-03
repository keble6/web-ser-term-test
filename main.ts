input.onButtonPressed(Button.A, function () {
    serial.writeLine("A pressed")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("B pressed")
})
serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.CarriageReturn)))
})
