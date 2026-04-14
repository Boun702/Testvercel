export default function handler(request, response) {
  return response.status(200).json({
    message: "Hello from Vercel! 🚀",
    timestamp: new Date().toISOString()
  });
}
