const actions = require("./actions");
const path = require("path");
const defaultMusicPath = path.join(__dirname, "..", "/testMusic");

describe("getMusicData", () => {
  const files = actions.getMusicData();
  test("Returns a list of mp3s", () => {
    const rawLength = files.length;
    const filteredLength = files.filter(file =>
      file.toLowerCase().endsWith(".mp3")
    ).length;
    expect(rawLength).toBe(filteredLength);
  });
});

describe("getAudioFile", () => {
  const file = actions.getAudioFile(defaultMusicPath, "/Electrodoodle.mp3");
  test("Returns a single audio file", () => {
    expect(file).toBe(1);
  });
});
