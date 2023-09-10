const fs = require('fs');
const path = require('path');

const htmlCode = `
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">\

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/style.css">

    <title>Document</title>

    </head>

    <body>

    <h1>Welcome</h1>

    <script src="./js/script.js"></script>

</body>

</html>

`

const cssCode = `
h1 {

    text-align:center;
    
    }
    
`

const jsCode = `
alert("Welcome");
`


fs.mkdir(path.join(__dirname, "/frontend-scaffold"), {}, err => {
    if (err) throw err;

    else{

        fs.writeFile(path.join(__dirname, "./frontend-scaffold", "index.html"), htmlCode,
            err => {
                if (err) throw err;

            });

        fs.mkdir(path.join(__dirname, "/frontend-scaffold/css"), {}, err => {
            if (err) throw err;
            else{
                fs.writeFile(path.join(__dirname, "./frontend-scaffold","css", "style.css"), cssCode,
                err => {
                    if (err) throw err;
                }); 
            }
        });

       
        fs.mkdir(path.join(__dirname, "/frontend-scaffold/js"), {}, err => {
            if (err) throw err;
            else{
                fs.writeFile(path.join(__dirname, "frontend-scaffold/js", "script.js"), jsCode,
                err => {
                if (err) throw err;
        });

            }
        });
        fs.mkdir(path.join(__dirname, "/frontend-scaffold/images"), {}, err => {
            if (err) throw err;
        });
    }
        console.log('Frontend scaffold created successfully');

});

