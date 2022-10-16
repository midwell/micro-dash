function die () {
    music.playTone(262, music.beat(BeatFraction.Half))
}
function newJumpPad () {
    jumpPad = 1
    platform_4 = game.createSprite(4, 4)
    platform_4.set(LedSpriteProperty.Brightness, 180)
    platform_4.set(LedSpriteProperty.Blink, 100)
    basic.pause(tick)
    platform_4.set(LedSpriteProperty.Blink, 0)
    platform_4.set(LedSpriteProperty.Brightness, 255)
    platform_3 = game.createSprite(3, 4)
    platform_3.set(LedSpriteProperty.Blink, 100)
    platform_3.set(LedSpriteProperty.Brightness, 180)
    basic.pause(tick)
    platform_3.set(LedSpriteProperty.Blink, 0)
    platform_3.set(LedSpriteProperty.Brightness, 255)
    platform_2 = game.createSprite(2, 4)
    platform_2.set(LedSpriteProperty.Brightness, 180)
    platform_2.set(LedSpriteProperty.Blink, 100)
    basic.pause(tick)
    platform_2.set(LedSpriteProperty.Blink, 0)
    platform_2.set(LedSpriteProperty.Brightness, 255)
    platform_1 = game.createSprite(1, 4)
    platform_1.set(LedSpriteProperty.Brightness, 180)
    platform_1.set(LedSpriteProperty.Blink, 100)
    if (platform_1.isTouching(player)) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(50)
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(tick - 50)
    } else {
        basic.pause(tick)
    }
    platform_0 = game.createSprite(0, 4)
    platform_0.set(LedSpriteProperty.Brightness, 180)
    platform_0.set(LedSpriteProperty.Blink, 100)
    basic.pause(tick)
    platform_1.set(LedSpriteProperty.Blink, 0)
    platform_4.delete()
    platform_1.set(LedSpriteProperty.Brightness, 255)
    platform_1.set(LedSpriteProperty.Blink, 0)
    if (platform_1.isTouching(player)) {
        die()
    }
    basic.pause(tick)
    platform_3.delete()
    if (platform_1.isTouching(player)) {
        die()
    }
    basic.pause(tick)
    platform_2.delete()
    if (platform_1.isTouching(player)) {
        die()
    }
    basic.pause(tick)
    platform_1.delete()
    basic.pause(tick)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(30)
    player.change(LedSpriteProperty.Y, 1)
    platform_0.delete()
    jumpPad = 0
}
function newPlatform () {
    platform_4 = game.createSprite(4, 4)
    platform_4.set(LedSpriteProperty.Brightness, 100)
    basic.pause(tick)
    platform_3 = game.createSprite(3, 4)
    platform_3.set(LedSpriteProperty.Brightness, 100)
    basic.pause(tick)
    platform_2 = game.createSprite(2, 4)
    platform_2.set(LedSpriteProperty.Brightness, 100)
    basic.pause(tick)
    platform_1 = game.createSprite(1, 4)
    platform_1.set(LedSpriteProperty.Brightness, 100)
    if (platform_1.isTouching(player)) {
        die()
    }
    basic.pause(tick)
    platform_0 = game.createSprite(0, 4)
    platform_0.set(LedSpriteProperty.Brightness, 100)
    basic.pause(tick)
    platform_4.delete()
    basic.pause(tick)
    platform_3.delete()
    basic.pause(tick)
    platform_2.delete()
    basic.pause(tick)
    platform_1.delete()
    basic.pause(tick)
    platform_0.delete()
    if (player.get(LedSpriteProperty.Y) == 3) {
        player.change(LedSpriteProperty.Y, 1)
    }
}
function jump () {
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(50)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    if (gameMode == "robot" && input.buttonIsPressed(Button.A)) {
        basic.pause(500)
    }
    player.change(LedSpriteProperty.Y, 1)
    for (let index = 0; index < 2; index++) {
        if (jumpPad == 1 || platform_1.isDeleted() || player.get(LedSpriteProperty.Y) <= 2) {
            basic.pause(50)
            player.change(LedSpriteProperty.Y, 1)
        }
    }
}
function spiderJump () {
    playerY = player.get(LedSpriteProperty.Y)
    if (spiderPosition == 0) {
        for (let index = 0; index < playerY; index++) {
            player.change(LedSpriteProperty.Y, -1)
            basic.pause(20)
        }
        spiderPosition = 1
    } else {
        for (let index = 0; index < 4 - playerY; index++) {
            player.change(LedSpriteProperty.Y, 1)
            basic.pause(20)
        }
        spiderPosition = 0
    }
    basic.pause(50)
}
function newSpike (num: number) {
    spike = game.createSprite(4, num)
    spike.set(LedSpriteProperty.Brightness, 255)
    basic.pause(tick)
    if (spike.isTouching(platform_4)) {
        spike.change(LedSpriteProperty.Y, -1)
    }
    for (let index = 0; index < 4; index++) {
        spike.change(LedSpriteProperty.X, -1)
        if (player.isTouching(spike)) {
            die()
        }
        basic.pause(tick)
    }
    spike.delete()
}
function portal (nextLevel: string) {
    basic.pause(2000)
    tick = 300
    speed = 3
    portal1 = game.createSprite(3, 2)
    portal2 = game.createSprite(4, 3)
    portal3 = game.createSprite(3, 4)
    portal1.set(LedSpriteProperty.Brightness, 200)
    portal2.set(LedSpriteProperty.Brightness, 180)
    portal3.set(LedSpriteProperty.Brightness, 200)
    for (let index = 0; index < 4; index++) {
        basic.pause(300)
        portal1.change(LedSpriteProperty.X, -1)
        portal2.change(LedSpriteProperty.X, -1)
        portal3.change(LedSpriteProperty.X, -1)
    }
    gameMode = nextLevel
    if (gameMode == "normal" || gameMode == "robot") {
        for (let index = 0; index < 4; index++) {
            portal1.change(LedSpriteProperty.Y, 1)
            basic.pause(20)
        }
    }
    spiderPosition = 0
    portal1.delete()
    portal2.delete()
    portal3.delete()
}
let time = 0
let portal3: game.LedSprite = null
let portal2: game.LedSprite = null
let portal1: game.LedSprite = null
let speed = 0
let spike: game.LedSprite = null
let spiderPosition = 0
let playerY = 0
let platform_0: game.LedSprite = null
let platform_2: game.LedSprite = null
let platform_3: game.LedSprite = null
let gameMode = ""
let tick = 0
let player: game.LedSprite = null
let jumpPad = 0
let platform_4: game.LedSprite = null
let platform_1: game.LedSprite = null
platform_1 = game.createSprite(1, 4)
platform_4 = game.createSprite(1, 4)
jumpPad = 0
platform_1.delete()
platform_4.delete()
player = game.createSprite(1, 4)
tick = 300
gameMode = "normal"
player.set(LedSpriteProperty.Brightness, 175)
basic.forever(function () {
    basic.pause(1000)
    time += 1
    if (gameMode == "normal") {
        if (time >= 20) {
            tick = 200
        }
        if (time >= 40) {
            portal("spider")
        }
    }
    if (gameMode == "spider") {
        if (time >= 60) {
            tick = 200
        }
        if (time >= 80) {
            tick = 150
        }
        if (time >= 100) {
            portal("robot")
        }
    }
    if (gameMode == "robot") {
        if (time >= 120) {
            tick = 150
        }
    }
})
basic.forever(function () {
    basic.pause(randint(2000, 5000))
    if (gameMode == "normal" || gameMode == "robot") {
        newSpike(4)
    }
})
basic.forever(function () {
    if (gameMode == "spider") {
        basic.pause(randint(50 * speed, 150 * speed))
        if (Math.randomBoolean()) {
            newSpike(0)
        } else {
            newSpike(4)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(5000, 10000))
    if (gameMode == "normal" || gameMode == "robot") {
        if (randint(0, 2) <= 1) {
            newPlatform()
        } else {
            newJumpPad()
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (gameMode == "spider") {
            spiderJump()
        } else {
            jump()
        }
    }
})
