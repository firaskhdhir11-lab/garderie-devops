const { test } = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const path = require("node:path");

test("La page affiche le titre Ma Garderie", async (t) => {
  const port = 3107;
  const url = `http://127.0.0.1:${port}`;

  const server = spawn(
    process.execPath,
    [
      path.join(process.cwd(), "node_modules/next/dist/bin/next"),
      "dev",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        API_URL: "http://127.0.0.1:4002",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  let logs = "";
  server.stdout.on("data", (data) => (logs += data.toString()));
  server.stderr.on("data", (data) => (logs += data.toString()));

  t.after(() => {
    server.kill("SIGTERM");
  });

  let response;

  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js ne démarre pas :\n${logs}`);
    }

    try {
      response = await fetch(url);
      if (response.ok) break;
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  assert.ok(response?.ok, `Le site ne répond pas.\n${logs}`);

  const html = await response.text();
  assert.match(html, /Ma Garderie/, "Le titre Ma Garderie est absent.");
  assert.match(html, /Chaque jour/, "Le titre de bienvenue est absent.");
});
