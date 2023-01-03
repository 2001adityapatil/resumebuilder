const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    items = [];
    const obj = {
    fName: req.body.fName,
    lName: req.body.lName,
    emailId: req.body.emailId,
    phone: req.body.phone,
    linkedin: req.body.linkedin,
    github: req.body.github,
    careerSummary: req.body.careerSummary,
    role: req.body.role,
    company: req.body.company,
    date: req.body.date,
    roleDescription: req.body.roleDescription,
    role1: req.body.role1,
    company1: req.body.company1,
    date1: req.body.date1,
    roleDescription1: req.body.roleDescription1,
    education: req.body.education,
    university: req.body.university,
    edate: req.body.edate,
    eDescription: req.body.eDescription,
    education1: req.body.education1,
    university1: req.body.university1,
    edate1: req.body.edate1,
    eDescription1: req.body.eDescription1,
    skill1: req.body.skill1,
    skill2: req.body.skill2,
    skill3: req.body.skill3,
    skill4: req.body.skill4,
    skill5: req.body.skill5,
    bskill1: req.body.bskill1,
    bskill2: req.body.bskill2,
    bskill3: req.body.bskill3,
    bskill4: req.body.bskill4,
    bskill5: req.body.bskill5,
    oskill1: req.body.oskill1,
    oskill2: req.body.oskill2,
    oskill3: req.body.oskill3,
    oskill4: req.body.oskill4,
    lang1: req.body.lang1,
    lang2: req.body.lang2,
    lang3: req.body.lang3

    };
    // const fName = req.body.fName;
    // const lName = req.body.lName;
    // items.push(fName);
    // items.push(lName);
    items.push(obj);
    res.redirect("/resume");
})

app.get("/resume", function(req, res){
    res.render('list', {data: items});
})

app.post("/resume", function(req, res){
    (async function(){
        try{
    
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            // await page.type('.devsite-search-field', 'Headless Chrome');
    
            // await page.setContent("<h1> Aditya </h1>");
            await page.goto('http://localhost:3000/resume');
            await page.emulateMediaType('screen');
            await page.screenshot({path: 'screenshot.png'});
            await page.pdf({
                path: 'mypdf.pdf',
                printBackground: true,
                width: 1600,
                height: 1600
                
            });
    
            console.log("done");
            res.redirect("/resume");
            // await browser.close();
            // process.exit();
        }
        catch(e){
            console.log(e);
        }
    })();
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});






// (async function(){
//     try{

//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();

//         // await page.setContent("<h1> Aditya </h1>");
//         await page.goto('http://localhost:3000/');
//         await page.emulateMediaType('screen');
//         await page.pdf({
//             path: 'mypdf.pdf',
//             format: 'A4',
//             printBackground: true
//         });

//         console.log("done");
//         await browser.close();
//         process.exit();

//     }
//     catch(e){
//         console.log(e);
//     }
// })();
















