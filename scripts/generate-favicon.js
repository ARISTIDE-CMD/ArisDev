/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const pngToIcoModule = require('png-to-ico');
const pngToIco = pngToIcoModule.default || pngToIcoModule.imagesToIco;

const input = path.resolve(__dirname, '../public/logofinal.png');
const output = path.resolve(__dirname, '../public/favicon.ico');

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Fichier source introuvable:', input);
      process.exit(1);
    }

    const buffer = await pngToIco([input]);
    fs.writeFileSync(output, buffer);
    console.log('favicon.ico généré dans public/');
  } catch (err) {
    console.error('Erreur lors de la génération:', err);
    process.exit(1);
  }
})();
