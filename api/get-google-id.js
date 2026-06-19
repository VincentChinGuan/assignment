module.exports = function handler(request, response) {
  // Securely grabs the key from your Vercel settings
  const clientId = process.env.GOOGLE_API;

  // Sends the key back to your frontend code
  response.status(200).json({
    client_id: clientId
  });
};