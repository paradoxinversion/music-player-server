const fs = require("fs");
const path = require("path");

const defaultMusicPath = path.join(__dirname, "..", "/testMusic");

/**
 * Get Music Data from the directory
 */
const getMusicData = musicPath => {
  try {
    const musicData = fs.readdirSync(musicPath || defaultMusicPath);
    return musicData.filter(file => file.match(/.+mp3$/));
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getMusicData
};
