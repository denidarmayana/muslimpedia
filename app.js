// server.js
const express = require('express');
const Quran = require('./quran.service');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/surah/all', (req, res) => {
    const listSurahs = Quran.getListSurahs(); // Gunakan fungsi yang diimpor
    fs.writeFile('surah.json', JSON.stringify(listSurahs, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listSurahs);
        }
    });
});

app.get('/surah/:surahNumber', (req, res) => {
    const{surahNumber} = req.params
    const listSurahs = Quran.getSurah(surahNumber); // Gunakan fungsi yang diimpor
    res.send(listSurahs);
});

app.get('/juzs/all', (req, res) => {
    const listJuz= Quran.getJuz();
    fs.writeFile('juz.json', JSON.stringify(listJuz, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listJuz);
        }
    });
});

app.get('/juz/:juzNumber', (req, res) => {
    const{juzNumber} = req.params
    const listSurahs = Quran.getAyahsByJuz(juzNumber); // Gunakan fungsi yang diimpor
    res.send(listSurahs);
});

app.get('/page/:juzNumber', (req, res) => {
    const{juzNumber} = req.params
    const listSurahs = Quran.getAyahsByPage(juzNumber); // Gunakan fungsi yang diimpor
    res.send(listSurahs);
});
app.get('/pages/all', (req, res) => {
    const listSurahs = Quran.getPageAll(); 
    fs.writeFile('page.json', JSON.stringify(listSurahs, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listSurahs);
        }
    });
});
app.get('/manzils/all', (req, res) => {
    const listSurahs = Quran.getManzilAll(); 
    fs.writeFile('manzil.json', JSON.stringify(listSurahs, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listSurahs);
        }
    });
});
app.get('/manzil/:juzNumber', (req, res) => {
    const{juzNumber} = req.params
    const listSurahs = Quran.getAyahsByManzil(juzNumber); 
    res.send(listSurahs);
});
app.get('/rukus/all', (req, res) => {
    const listSurahs = Quran.getRukuAll(); 
    fs.writeFile('ruku.json', JSON.stringify(listSurahs, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listSurahs);
        }
    });
});
app.get('/ruku/:juzNumber', (req, res) => {
    const{juzNumber} = req.params
    const listSurahs = Quran.getAyahsByRuku(juzNumber); 
    res.send(listSurahs);
});
app.get('/hizbs/all', (req, res) => {
    const listSurahs = Quran.getHizbAll(); 
    fs.writeFile('hizb.json', JSON.stringify(listSurahs, null, 2), (err) => {
        if (err) {
            console.error('Gagal menyimpan file JSON:', err);
            res.status(500).send('Gagal menyimpan file');
        } else {
            console.log('Response berhasil disimpan ke surahList.json');
            res.send(listSurahs);
        }
    });
});
app.get('/hizb/:juzNumber', (req, res) => {
    const{juzNumber} = req.params
    const listSurahs = Quran.getAyahsByHizb(juzNumber); 
    res.send(listSurahs);
});
app.get('/ayahs/sajadah', (req, res) => {
    const listSurahs = Quran.getSajadah(); 
    res.send(listSurahs);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
