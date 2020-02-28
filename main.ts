input.onButtonPressed(Button.AB, function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        for (let index2 = 0; index2 <= _2001_beats.length - 1; index2++) {
            radio.sendString("" + (_2001_colours[index2]))
            radio.sendNumber(_2001_moves[index2])
            music.playTone(notes_freq[notes_name.indexOf(_2001_notes[index2])], _2001_beats[index2])
        }
        radio.sendNumber(0)
        radio.sendString("black")
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let index1 = 0; index1 <= starwars_beats.length - 1; index1++) {
            radio.sendString("" + (starwars_colours[index1]))
            music.playTone(notes_freq[notes_name.indexOf(starwars_notes[index1])], starwars_beats[index1])
        }
        basic.pause(500)
    }
})
let notes_freq: number[] = []
let notes_name: string[] = []
let starwars_beats: number[] = []
let starwars_notes: string[] = []
let _2001_beats: number[] = []
let _2001_notes: string[] = []
let _2001_moves: number[] = []
let _2001_colours: string[] = []
let starwars_colours: string[] = []
basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
radio.setGroup(13)
starwars_colours = ["red", "green", "yellow", "red", "yellow", "green", "red", "green", "yellow", "green", "red", "green", "yellow", "green", "red", "yellow"]
_2001_colours = ["red", "blue", "green", "yellow", "indigo", "orange", "purple", "blue", "green", "red", "violet", "yellow", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green"]
_2001_moves = [1, -1, 1, -1, 1, 2, 3, 2, 3, -1, 1, -1, 1, -1, 3, 2, 3, 2, 1, -1, 1, -1, 1, 3, 2, 3, 2, -1, 1, -1, 1, 2, 3]
_2001_notes = ["C", "C", "E", "G", "G", "g", "g", "e", "e", "C", "C", "E", "G", "G", "g", "g", "f", "f", "B", "B", "D", "A", "A", "#", "G", "e", "c", "E", "E", "D", "A", "G", "C"]
_2001_beats = [1000, 1000, 1000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 1000, 1000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 1000, 1000, 1000, 4000, 1000, 1000, 4000, 1000, 1000, 2000, 1000, 2000, 1000, 2000]
starwars_notes = ["C", "G", "F", "E", "D", "c", "G", "F", "E", "D", "c", "G", "F", "E", "F", "D"]
starwars_beats = [1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000]
notes_name = ["1", "2", "3", "4", "5", "6", "7", "C", "D", "E", "F", "G", "A", "B", "c", "d", "e", "f", "g", "a", "#"]
notes_freq = [131, 147, 165, 175, 196, 220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 370]
