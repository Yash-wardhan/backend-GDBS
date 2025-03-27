const googleDriveService = require('../services/googleDrive');

const saveLetter = async (req, res) => {
  try {
    const { content, title } = req.body;
    const fileId = await googleDriveService.saveToDrive(content, title, req.user.accessToken);
    res.json({ message: 'Letter saved to Google Drive', fileId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLetters = async (req, res) => {
  try {
    const files = await googleDriveService.listFiles(req.user.accessToken);
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { saveLetter, getLetters };