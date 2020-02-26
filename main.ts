input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        for (let index2 = 0; index2 <= starwars_beats.length - 1; index2++) {
            radio.sendString("" + (colours[index2]))
            music.playTone(notes_freq[notes_name.indexOf(starwars_notes[index2])], starwars_beats[index2])
        }
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let index2 = 0; index2 <= starwars_beats.length - 1; index2++) {
            radio.sendString("" + (colours[index2]))
            music.playTone(notes_freq[notes_name.indexOf(starwars_notes[index2])], starwars_beats[index2])
        }
        basic.pause(500)
    }
})
let notes_freq: number[] = []
let notes_name: string[] = []
let starwars_beats: number[] = []
let starwars_notes: string[] = []
let colours: string[] = []
basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
radio.setGroup(1)
colours = ["red", "green", "yellow", "red", "yellow", "green", "red", "green", "yellow", "green", "red", "green", "yellow", "green", "red", "yellow"]
let _2001_notes = ["C", "G", "F", "E", "D", "c", "G", "F", "E", "D", "c", "G", "F", "E", "F", "D"]
let _2001_beats = [1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000]
starwars_notes = ["C", "G", "F", "E", "D", "c", "G", "F", "E", "D", "c", "G", "F", "E", "F", "D"]
starwars_beats = [1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000]
notes_name = ["1", "2", "3", "4", "5", "6", "7", "C", "D", "E", "F", "G", "A", "B", "c", "d", "e", "f", "g", "a"]
notes_freq = [131, 147, 165, 175, 196, 220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880]
