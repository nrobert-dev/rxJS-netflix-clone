const movies = [
    "Princess Mononoke", "Garfield and the Bois", "Lord of the Rings", "Shaun of the Dead", "Letter to Juliet",
    "Rick and Morty", "The Three Stooges", "Sunshine Warrior", "Tarot Reader", "Gone Girl", "Missing Arm", "Harry Potter",
    "Urgent Alarm", "Friends", "Remember Me", "A Boy", "Rocket Man", "The Queen", "Royal Family", "Drudge&Laura", "Critical Role"
];

const types = [
    "Comedy",
    "Adventure",
    "Romance",
    "SciFi",
    "Horror",
    "Drama"
];


const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/204/300",
    "https://picsum.photos/205/302",
    "https://picsum.photos/207/302",
    "https://picsum.photos/203/305",
    "https://picsum.photos/202/300",
    "https://picsum.photos/209/412",
    "https://picsum.photos/211/300",
    "https://picsum.photos/233/410",
];

const fonts = [
    'Arial',
    'Times New Roman',
    'Calibri',
    'Garamond',
    'Arial'
]

const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
];

const generateData = (categories, type) => {
    let data = {};
    data.lists = [];

    switch(type){
        case 1:
            data.main = {
                url : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4#t=45',
                image : 'https://ddz4ak4pa3d19.cloudfront.net/cache/4a/90/4a90b8ec14b82d9d6ad82ebcb2a21ee8.jpg',
                title : 'SINTEL'
            };
            break;
        case 2:
            data.main = {
                url : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=45',
                image : 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Elephants_Dream_cover.jpg',
                title : 'ELEPHANTS DREAM'
            };
            break;
        case 3:
            data.main = {
                url : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4#t=45',
                image : 'https://ddz4ak4pa3d19.cloudfront.net/cache/4a/90/4a90b8ec14b82d9d6ad82ebcb2a21ee8.jpg',
                title : 'SINTEL'
            };
            break;
        default:

    }

    for(let i=0;i<categories;i++){
        const lineUp = {
            title : types[Math.floor((Math.random()*types.length))],
            movies : []
        };

        for(let j=0;j<5;j++){
            lineUp.movies.push({
                name : movies[Math.floor((Math.random()*movies.length))],
                image : images[Math.floor((Math.random()*images.length))],
                url : videos[Math.floor((Math.random()*videos.length))],
                font : fonts[Math.floor((Math.random()*fonts.length))]
            })
        }

        data.lists.push(lineUp);
    }
    return data;
}

const generatedMovies = generateData(3,1);
const generatedShows = generateData(4,2);
const generatedNew = generateData(2,3);

module.exports = {
    generatedMovies,
    generatedShows,
    generatedNew
};