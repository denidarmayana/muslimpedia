const axios = require('axios');
const fs = require('fs');

async function fetchAndSaveHizbs(surah) {
    try {
        const response = await axios.get(`http://localhost:3000/ruku/${surah}`);
        if (response.status === 200) {
            const file = `ruku/${surah}.json`;
            fs.writeFile(file, JSON.stringify(response.data, null, 2), (err) => {
                if (err) {
                    console.error('Gagal menyimpan file JSON:', err);
                } else {
                    console.log(`Response berhasil disimpan ke ${file}`);
                }
            });
        } else {
            console.error('Permintaan gagal dengan status:', response.status);
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data:', error.message);
    }
}

async function fetchAllHizbs() {
    for (let i = 1; i <= 556; i++) {
        await fetchAndSaveHizbs(i);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Jeda 1 detik
    }
}

fetchAllHizbs();
