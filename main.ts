import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Function to serve index.html
async function indexHandler() {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve main.be179052.js with main.593d481e.css
async function validationHandler() {
  const html = await Deno.readTextFile("./main.be179052.js");
  return new Response(js, {
    headers: { "content-type": "text/js" },
  });
}
// Function to serve main.593d481e.css
async function styleHandler() {
  const css = await Deno.readTextFile("./main.593d481e.css,");
  return new Response(css, {
    headers: { "content-type": "text/css" },
  });
}

// Main routing logic
const handler = (req: Request) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return indexHandler(); // Serve the home page (index.html)
  } else if (url.pathname === "/main.be179052.js") {
    return validationHandler(); // Serve the validation page (main.be179052.js)
  } else if (url.pathname === "/main.593d481e.css,") {
    return styleHandler(); // Serve the CSS file
  }

  // Default handler for unknown routes
  return new Response("Page Not Found", { status: 404 });
};

// Start the server
console.log("Server is running on http://localhost:8000");
serve(handler);
