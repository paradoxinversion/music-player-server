const fs = require("fs");
const path = require("path");
const { getMusicData } = require("../../actions");

/**
 * Return all tracks in the directory
 * @param {*} req
 * @param {*} res
 * @param {*} err
 */
const getTracks = (req, res, err) => {
  tracks = getMusicData();
  res.json({
    tracks
  });
};

/**
 * Stream a track by name (must be unique for now)
 * @param {*} req
 * @param {*} res
 * @param {*} err
 */
const getTrackByName = (req, res, err) => {
  try {
    const trackName = req.query.trackName;

    // TODO: Make a proper default path (and/or allow configuration)
    const musicPath = path.resolve(
      __dirname,
      "../../../testMusic",
      `./${trackName}.mp3`
    );
    const fileStats = fs.statSync(musicPath);
    res.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Content-Length": fileStats.size
    });

    const readStream = fs.createReadStream(musicPath);

    readStream.pipe(res);
  } catch (e) {
    if (e.code == "ENOENT") {
      res.status(404);
      res.json({
        error: "No track found with that name"
      });
    }
  }
};

module.exports = { getTrackByName, getTracks };
