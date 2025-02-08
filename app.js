import http from "http";
import app from ".";
import dotenv from "dotenv";

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Magic happening on port: ${PORT}`));
