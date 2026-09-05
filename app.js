const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Simple router for different endpoints
  if (req.url === '/api/info') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      brand: "Zealan Fashion Bliz",
      status: "Operational",
      environment: "Docker Container"
    }));
  }

  // Default HTML Endpoint
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zealan Fashion Bliz</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
            body { background-color: #f9f9f9; color: #333; }
            header { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
            .logo { font-weight: 800; font-size: 1.5rem; color: #111; text-transform: uppercase; letter-spacing: 1px; }
            .logo span { color: #ff3e6c; }
            .hero { text-align: center; padding: 80px 20px; background: #fff; }
            h1 { font-size: 3rem; margin-bottom: 10px; }
            p { font-size: 1.2rem; margin-bottom: 30px; color: #666; }
            .btn-group { display: flex; gap: 15px; justify-content: center; }
            .btn { padding: 12px 30px; font-size: 1rem; font-weight: 600; text-decoration: none; border-radius: 4px; cursor: pointer; border: none; }
            .btn-primary { background-color: #111; color: #fff; }
            .btn-primary:hover { background-color: #ff3e6c; }
            .btn-secondary { background-color: transparent; color: #111; border: 2px solid #111; }
        </style>
    </head>
    <body>
        <header>
            <div class="logo">Zealan Fashion Bliz<span>.</span></div>
            <nav style="color: #666;">Containerized App</nav>
        </header>
        <section class="hero">
            <h1>Elevate Your Style</h1>
            <p>Discover trends curated exclusively by Zealan Fashion Bliz.</p>
            <div class="btn-group">
                <button class="btn btn-primary" onclick="alert('Browsing New Arrivals!')">Shop New Arrivals</button>
                <button class="btn btn-secondary" onclick="window.location.href='/api/info'">View API Endpoint</button>
            </div>
        </section>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Zealan Fashion Bliz server running on port ${PORT}`);
});
