const { google } = require('googleapis');

const saveToDrive = async (content, title, accessToken) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const drive = google.drive({ version: 'v3', auth });
  const fileMetadata = {
    name: title || 'Untitled Letter',
    mimeType: 'application/vnd.google-apps.document',
  };
  const media = {
    mimeType: 'text/plain',
    body: content,
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id',
  });

  return response.data.id;
};

const listFiles = async (accessToken) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const drive = google.drive({ version: 'v3', auth });
  const response = await drive.files.list({
    q: "mimeType='application/vnd.google-apps.document'",
    fields: 'files(id, name)',
  });

  return response.data.files;
};

module.exports = { saveToDrive, listFiles };