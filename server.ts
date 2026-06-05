const server = Bun.serve({
  port: 3100,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to latest.json for root
    if (path === "/") path = "/latest.json";

    const file = Bun.file(`.${path}`);
    if (await file.exists()) {
      return new Response(file, {
        headers: {
          "Content-Type": path.endsWith(".json")
            ? "application/json"
            : "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Registry running on port ${server.port}`);
