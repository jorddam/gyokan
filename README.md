# 行間 Gyokan

A personal Japanese ebook reader that runs in the browser. Open `index.html` through GitHub Pages and add it to the home screen.

## Files

- `index.html` – the app
- `sw.js` – keeps the app available offline
- `kuromoji.js`, `kuromoji.*.bin` – Japanese word splitting
- `kanji.bin` – kanji readings and meanings
- `jmdict.*.bin` – the offline dictionary

## Credits and licences

- Dictionary and kanji data: [JMdict and KANJIDIC](https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project), property of the Electronic Dictionary Research and Development Group, used under the Creative Commons Attribution-ShareAlike licence. The data was repackaged into a compact lookup format for this app.
- Word splitting: [kuromoji.js](https://github.com/takuyaa/kuromoji.js) (Apache License 2.0), with a small change to how it loads its dictionary, and the mecab-ipadic dictionary it ships with.
