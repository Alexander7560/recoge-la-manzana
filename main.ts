input.onButtonPressed(Button.A, function () {
    cuadrado.move(-1)
})
input.onButtonPressed(Button.B, function () {
    cuadrado.move(1)
})
let manzana: game.LedSprite = null
let cuadrado: game.LedSprite = null
cuadrado = game.createSprite(2, 4)
basic.pause(200)
basic.forever(function () {
    manzana = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(400)
        manzana.change(LedSpriteProperty.Y, 1)
    }
    if (!(manzana.isTouching(cuadrado))) {
        game.gameOver()
    }
    manzana.delete()
})
