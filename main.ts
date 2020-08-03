sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
let player_pizza_chaser = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . f 1 f . . . . . 
    . . . . . . . f 1 1 f . . . . . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . f 1 1 f . . . . . . . 
    . . . . f 1 1 f . . . . . . . . 
    . . . f 1 1 f . . . . . . . . . 
    . . f 1 1 f . . . . . . . . . . 
    . f 1 1 f . . . . . . . . . . . 
    . f 1 1 1 f f f f f f f f f . . 
    . f f 1 1 1 1 1 1 1 1 1 1 1 f . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_pizza_chaser)
player_pizza_chaser.setPosition(147, 109)
pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 4 4 4 4 5 5 5 5 . . . . 
    . . . . 4 2 2 4 2 2 4 4 . . . . 
    . . . . 4 2 2 4 2 2 4 . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . 4 4 2 2 4 . . . . . . . 
    . . 4 2 2 4 2 2 4 . . . . . . . 
    . . 4 2 2 4 4 4 4 . . . . . . . 
    . . 4 4 4 4 4 4 . . . . . . . . 
    . . 4 2 2 4 . . . . . . . . . . 
    . 4 4 2 2 . . . . . . . . . . . 
    . 2 4 . . . . . . . . . . . . . 
    `, SpriteKind.Food)
player_pizza_chaser.setFlag(SpriteFlag.StayInScreen, true)
