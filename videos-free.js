/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    ['videos/HOOD NARUTO  pt.3 (full video) naruto vs sasuke.mp4', 38, 26],
    ['videos/HOOD NARUTO  pt.3 (full video) naruto vs sasuke.mp4', 46, 25],
    // ['videos/HOOD NARUTO  pt.4 (full video) naruto vs pain.mp4', 23, 32],
    'videos/U GOT Яйца.mp4',
    ['videos/dj-eban2.mp4', 0, 25],
    () => p5Wheel.random([
        ['videos/Пузантос - Бумаги [Morrowind].mp4', 129],
        ['videos/Пузантос - Бумаги [Morrowind].mp4', 75, 30],
    ]),
    'videos/04.mp4',
    'videos/06.mp4',
    'videos/16.mp4',

    ['videos/streamers/liz0N - Пятница (песенка про Minecraft).mp4', 31, 32],
    ['videos/streamers/faker.mp4', 0, 24],
    ['videos/streamers/grafon.mp4', 0, 29],
    ['videos/streamers/mel.mp4', 0, 20],
    ['videos/streamers/nam.mp4', 0, 29],
    ['videos/streamers/Liz0N.mp4', 0, 15],
    ['videos/streamers/Road.mp4', 0, 28],
    ['videos/streamers/Road3.mp4', 0, 30],
    ['videos/streamers/usach01.mp4', 0, 31],
    ['videos/streamers/usach02.mp4', 0, 30],
    ['videos/streamers/Praden01.mp4', 0, 24],
    ['videos/streamers/namvseyasno-shrekophone.mp4', 0, 24],

    ['videos/netproblem.mp4', 0, 25],
    ['videos/mine.mp4', 0, 32],
    ['videos/elmo.mp4', 0, 30],
    ['videos/chipchip.mp4', 0, 28],
    ['videos/amogus.mp4', 0, 27],
    ['videos/A4.mp4', 0, 28],
    ['videos/azamat.mp4', 0, 27],
    ['videos/bebra.mp4', 0, 34],
    ['videos/billy.mp4', 0, 30],
    ['videos/bukin.mp4', 0, 27],
    ['videos/ching.mp4', 0, 29],
    ['videos/ebalo.mp4', 0, 29],
    ['videos/gavno.mp4', 0, 31],
    ['videos/kasino.mp4', 0, 41],
    ['videos/krike.mp4', 0, 37],
    ['videos/maestro.mp4', 0, 21],
    ['videos/kal.mp4', 0, 29],
    ['videos/zemo.mp4', 0, 24],
    ['videos/karta.mp4', 0, 30],
    ['videos/kid-hitmanclub.mp4', 0, 25],
    ['videos/turboremix.mp4', 0, 32],
    ['videos/SURA MURA - Симпл димпл нет поп ит.mp4', 0, 24],
    ['videos/riba.mp4', 0, 24],
    ['videos/mel pops.mp4', 0, 27],
    ['videos/petecat.mp4', 0, 27],
    ['videos/palich.mp4', 0, 23],
    ['videos/кис-кис кис-кис, барака Обама, я Гордон ты Гордон, кис-кис кис-кис.mp4', 0, 28],
    ['videos/Бегу по качалке, в голове. (♂Right version).mp4', 0, 16],
    ['videos/Квас Закамский это хит.mp4', 0, 15],
    ['videos/Моршу RTX - Ремикс_Morshu Remix.mp4', 0, 36],
    ['videos/ОЙ - ОЙ НРАВИТСЯ.mp4', 0, 30],
    ['videos/цiногриз!.mp4', 0, 17],
    ['videos/hey.mp4', 0, 27],
    ['videos/isus.mp4', 0, 30],
    ['videos/jojo.mp4', 0, 25],
    ['videos/lojka.mp4', 0, 28],
    ['videos/tarakan.mp4', 0, 28],
    ['videos/Бондюэль - Олимпиада.mp4', 0, 29],
];