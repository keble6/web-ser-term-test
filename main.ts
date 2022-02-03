serial.onDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.Dollar)))
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("A pressed")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("B pressed")
})
