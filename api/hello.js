export default function handler(request, response) {
  return response.status(200).json({
    message: "Hello from /api/hello! 🚀",
    timestamp: new Date().toISOString(),
    greeting: "สวัสดีครับ!"
  });
}
