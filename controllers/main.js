const fs = require('fs');
const http = require('http');

const noLayout = "../views/layouts/nothing.ejs"

const home = async (req, res) => {

    res.render('home', {
        title: "Home",
        layout: noLayout
    })
}

const downloadResume = async (req, res) => {
    const filePath = 'resume/Resume.pdf';
    const fileName = 'Resume.pdf';
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('open', () => {
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
    });

    res.on('close', () => {
        fileStream.destroy();
        console.log('Request aborted by the client');
    });

    // const filePath = 'resume/Resume.pdf';
    // res.download(filePath, 'Resume.pdf', (err) => {
    //     if (err) {
    //     console.error('Error downloading file:', err);
    //     res.status(500).send('Error downloading file');
    //     }
    // });
}

module.exports = {
    home,
    downloadResume
}