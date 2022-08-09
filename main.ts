input.onButtonPressed(Button.A, function () {
    showName = true
})
input.onButtonPressed(Button.B, function () {
    showName = false
})
let showName = false
showName = true
basic.forever(function () {
    if (showName) {
        basic.showString("Khloe")
    } else {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
