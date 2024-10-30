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
    numberCountDown = 4

    while (numberCountDown > 0) {
        
        
        basic.forever(function() {
            basic.showNumber(numberCountDown)
            neopixleStrip.show()
        })

        //seting how many light up

        //numberCountDown = 4
        if (numberCountDown = 4 ) {
            neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
            pause(700)
        }

        //numberCountDown = 3
        if (numberCountDown = 3) {
            neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            pause(700)
        }

        //numberCountDown = 2
        if (numberCountDown = 2) {
            neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            pause(700)
        }

        //numberCountDown = 1
        if (numberCountDown = 1) {
            neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            pause(700)
        }
        
        //numberCountDown = 0
        if (numberCountDown <= 0) {
            neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            pause(700)
        }


        //subtract one from numberCountDown
        numberCountDown = numberCountDown - 1
    }
    numberCountDown = 0
    basic.showIcon(IconNames.Happy)
})
