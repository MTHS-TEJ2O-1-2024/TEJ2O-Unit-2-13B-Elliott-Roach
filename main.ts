/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program lights up the same amont of neopixles as the number of numberCountDown
*/

let numberCountDown:number = 4
let neopixleStrip: neopixel.Strip = null

//clean
basic.clearScreen()
neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.show()
basic.showIcon(IconNames.Happy)

//light up how many neopixles are equal to numberCountDown
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    while (numberCountDown > 0) {
        
        //seting how many light up
        if (numberCountDown = 4 )
            neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.show()

        if (numberCountDown = 3)
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.show()

        if (numberCountDown = 2)
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.show()

        if (numberCountDown = 1)
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.show()

        if (numberCountDown = 0)
            neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.show()

        //subtract one from numberCountDown
        numberCountDown = numberCountDown - 1
        basic.showNumber(numberCountDown)
    }
})