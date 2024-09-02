// quran.service.js
const quran = require("./quran.json");

const getListSurahs = () => {
    return quran.map(({ ayahs, bismillah, ...rest }) => rest);
};
const getSurah = (surahNumber) => {
    const index = Number(surahNumber) - 1;
    if (index < 0 || index >= quran.length) {
        throw new Error('Nomor surah tidak valid');
    }
    const { ayahs } = quran[index];
    return ayahs.map(({ image, tafsir, meta, audio,number, ...rest }) => {
        const audioUrl = audio ? Object.values(audio)[0] : null;
        const Number = number ? Object.values(number)[1] : null;
        const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
        const quraish = tafsir ? Object.values(tafsir)[1] : null;
        const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
        return { ayat:Number, ...rest, audio: audioUrl,kemenag:Tafsir,quraish:quraish,jalalayn:jalalayn };
    });
};
const getJuz = () => {
    const juzMap = {};
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const juz = meta.juz;
            if (!juzMap[juz]) {
                const ayat = number ? Object.values(number)[1] : null;
                juzMap[juz] = { juz, number: meta.inSurah, name: rest.name, ayat: ayat};
            }
        });
    });
    return Object.values(juzMap);
};
const getAyahsByJuz = (juzNumber) => {
    const juzMap = [];
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const juz = meta.juz;
            if (juz == juzNumber) {
                const ayat = number ? Object.values(number)[1] : null;
                const audioUrl = audio ? Object.values(audio)[0] : null;
                const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
                const quraish = tafsir ? Object.values(tafsir)[1] : null;
                const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
                juzMap.push ({ juz, number: meta.inSurah, name: rest.name, ayat: ayat,arab,translation,audio:audioUrl,tafsir:Tafsir,quraish:quraish,jalalayn:jalalayn});
            }
        });
    });
    return juzMap;
};

const getAyahsByPage = (juzNumber) => {
    const juzMap = [];
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const page = meta.page;
            if (page == juzNumber) {
                const ayat = number ? Object.values(number)[1] : null;
                const audioUrl = audio ? Object.values(audio)[0] : null;
                const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
                const quraish = tafsir ? Object.values(tafsir)[1] : null;
                const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
                juzMap.push ({ page, number: meta.inSurah, name: rest.name, ayat: ayat,arab,translation,audio:audioUrl,tafsir:Tafsir,quraish:quraish,jalalayn:jalalayn});
            }
        });
    });
    return juzMap;
};
const getPageAll = () => {
    const pageMap = {};
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta, tafsir, image, arab, translation, audio, number, ...ayahRest }) => {
            const page = meta.page;
            if (!pageMap[page]) {
                const ayatNumberInSurah = number.inSurah; 
                pageMap[page] = { 
                    page, 
                    number: ayatNumberInSurah, 
                    name: rest.name
                };
            }
        });
    });
    return Object.values(pageMap);
};
const getManzilAll = () => {
    const pageMap = {};
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta, tafsir, image, arab, translation, audio, number, ...ayahRest }) => {
            const manzil = meta.manzil;
            if (!pageMap[manzil]) {
                const ayatNumberInSurah = number.inSurah; 
                pageMap[manzil] = { 
                    manzil,
                    name: rest.name,
                    ayat: ayatNumberInSurah,
                };
            }
        });
    });
    return Object.values(pageMap);
};
const getAyahsByManzil = (juzNumber) => {
    const juzMap = [];
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const manzil = meta.manzil;
            if (manzil == juzNumber) {
                const ayat = number ? Object.values(number)[1] : null;
                const audioUrl = audio ? Object.values(audio)[0] : null;
                const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
                const quraish = tafsir ? Object.values(tafsir)[1] : null;
                const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
                juzMap.push ({ manzil, number: meta.inSurah, name: rest.name, ayat: ayat,arab,translation,audio:audioUrl,tafsir:Tafsir,quraish:quraish,jalalayn:jalalayn});
            }
        });
    });
    return juzMap;
};
const getRukuAll = () => {
    const pageMap = {};
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta, tafsir, image, arab, translation, audio, number, ...ayahRest }) => {
            const ruku = meta.ruku;
            if (!pageMap[ruku]) {
                const ayatNumberInSurah = number.inSurah; 
                pageMap[ruku] = { 
                    ruku,
                    name: rest.name,
                    ayat: ayatNumberInSurah,
                };
            }
        });
    });
    return Object.values(pageMap);
};
const getAyahsByRuku = (juzNumber) => {
    const juzMap = [];
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const ruku = meta.ruku;
            if (ruku == juzNumber) {
                const ayat = number ? Object.values(number)[1] : null;
                const audioUrl = audio ? Object.values(audio)[0] : null;
                const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
                const quraish = tafsir ? Object.values(tafsir)[1] : null;
                const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
                juzMap.push ({ ruku, number: meta.inSurah, name: rest.name, ayat: ayat,arab,translation,audio:audioUrl,tafsir:Tafsir,quraish:quraish,jalalayn:jalalayn});
            }
        });
    });
    return juzMap;
};
const getHizbAll = () => {
    const pageMap = {};
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta, tafsir, image, arab, translation, audio, number, ...ayahRest }) => {
            const hizb = meta.hizbQuarter;
            if (!pageMap[hizb]) {
                const ayatNumberInSurah = number.inSurah; 
                pageMap[hizb] = { 
                    hizb,
                    name: rest.name,
                    ayat: ayatNumberInSurah,
                };
            }
        });
    });
    return Object.values(pageMap);
};
const getAyahsByHizb = (juzNumber) => {
    const juzMap = [];
    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta,tafsir,image,arab,translation,audio,number, ...ayahRest }) => {
            const hizb = meta.hizbQuarter;
            if (hizb == juzNumber) {
                const ayat = number ? Object.values(number)[1] : null;
                const audioUrl = audio ? Object.values(audio)[0] : null;
                const Tafsir = tafsir ? Object.values(tafsir)[0].long : null;
                const quraish = tafsir ? Object.values(tafsir)[1] : null;
                const jalalayn = tafsir ? Object.values(tafsir)[2] : null;
                juzMap.push ({ hizb, number: meta.inSurah, name: rest.name, ayat: ayat,arab,translation,audio:audioUrl,tafsir:Tafsir,quraish:quraish,jalalayn:jalalayn});
            }
        });
    });
    return juzMap;
};
const getSajadah = () => {
    const sajadahAyat = [];

    quran.forEach(({ ayahs, bismillah, ...rest }) => {
        ayahs.forEach(({ meta, tafsir, image, arab, translation, audio, number, ...ayahRest }) => {
            const isRecommendedSajda = meta.sajda.recommended;
            if (isRecommendedSajda) {
                const ayatNumberInSurah = number.inSurah;
                const surahNumber = rest.number; // Nomor surah
                
                // Masukkan informasi yang relevan ke dalam array
                sajadahAyat.push({
                    surahNumber,
                    name: rest.name,
                    ayat: ayatNumberInSurah,
                    arab,
                    translation,
                });
            }
        });
    });

    // Urutkan berdasarkan nomor surah dan nomor ayat
    sajadahAyat.sort((a, b) => {
        if (a.surahNumber === b.surahNumber) {
            return a.ayat - b.ayat;
        }
        return a.surahNumber - b.surahNumber;
    });

    return sajadahAyat;
};

module.exports = { getListSurahs, getSurah,getAyahsByJuz,
    getJuz,getPageAll,getAyahsByPage,getManzilAll,getRukuAll,
    getHizbAll,getSajadah,getAyahsByManzil,getAyahsByRuku,getAyahsByHizb };
