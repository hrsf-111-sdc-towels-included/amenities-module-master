const csvWritter = require('csv-writer');

var csvObjectHead = csvWritter.createObjectCsvWriter({
    path: `${__dirname}/theData.csv`,
    header: [
        {id: "amen_id", title: "amen_id"},
        {id: "appeal", title: "appeal"},
        {id: "category", title: "category"},
        {id: "common", title: "common"},
        {id: "description", title: "description"},
        {id: "home_id", title: "home_id"},
        {id: "id", title: "id"},
        {id: "img_url", title: "img_url"},
        {id: "included", title: "included"},
        {id: "name", title: "name"},


    ],
});

var dataInjecting = [
]

var testSeed = {
    amen_id: 11, 
    appeal: 9, 
    category: "Hip", 
    common: 1, 
    description: "Mason jar filled w/ dill", 
    home_id: 103, 
    id: 56, 
    img_url: "https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jar.png", 
    included: 0, 
    name: "Pickle jar"
}


for (var i = 0; i < 100; i++) {
    dataInjecting.push(testSeed);
}

csvObjectHead.writeRecords(dataInjecting);





































// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: `${__dirname}/file.csv`,
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANGUAGE'}
//     ]
// });
 
// const records = [
//     {name: 'Bob',  lang: 'French, English'},
//     {name: 'Mary', lang: 'English'}
// ];
 
// csvWriter.writeRecords(records)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

