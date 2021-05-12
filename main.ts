let hoe_warm_is_het = 0
input.onButtonPressed(Button.A, function () {
    hoe_warm_is_het = input.temperature()
    basic.showNumber(hoe_warm_is_het)
    basic.pause(2000)
})
