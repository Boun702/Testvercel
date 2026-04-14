export default function handler(req, res) {
  const { method, url } = req;

  if (url === '/api/hello') {
    return res.status(200).json({
      message: 'Hello from Vercel! 🚀',
      timestamp: new Date().toISOString()
    });
  }

  return res.status(200).json({
    status: 'ok',
    routes: ['/api/hello']
  });
}
