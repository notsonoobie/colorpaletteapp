import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalette(starterPalette) {
    // New Palette to be send instead of starterPalette
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors : {}
    }
    // Creating Levels of Colors ---> 50:[], 100:[],...,900:[]
    for (let level of levels) {
        newPalette.colors[level] = []
    }
    // Generating a scale for all the differents colors for scale 50 - 900
    for (let color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse()
        for (let i in scale) {
            newPalette.colors[levels[i]].push(
                {
                    name: `${color.name} ${levels[i]}`,
                    id: color.name.toLowerCase().replace(/ /g, '-'),
                    hex: scale[i],
                    rgb: chroma(scale[i]).css(),
                    rgba: chroma(scale[i]).css().replace("rgb","rgba").replace(")",",1.0)")
                }
            )
        }
    }
    return newPalette
}

//Returns the Range of Colors from Dark {{ "Color"-->"Input Color"-->"Light(white) Color" }}
function getRange(hexColor) {
    const endColor = '#fff';
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        endColor
    ]
}

function generateScale(hexColor, noOfColors) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(noOfColors)
}

export { generatePalette }