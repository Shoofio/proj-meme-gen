'use strict'

var gTags = { 'Funny': 1, 'Cats': 3, 'The Dog': 5 }

var gImgs = [
    { id: 101, url: 'meme-imgs (square)/1.jpg', keywords: ['Funny', 'Cats'] },
    { id: 102, url: 'meme-imgs (square)/2.jpg', keywords: ['Funny', 'Cats'] },
    { id: 103, url: 'meme-imgs (square)/3.jpg', keywords: ['Funny', 'Cats'] },
    { id: 104, url: 'meme-imgs (square)/4.jpg', keywords: ['Funny', 'Cats'] },
    { id: 104, url: 'img/hank.png', keywords: ['Funny', 'Cats'] },
]

var gMeme = {
    selectedImgId: 101,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'china',
            size: 16,
            align: 'center',
            color: 'black'
        }
    ]
}