import "dotenv/config";
import "regenerator-runtime";
import app from "../app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.info(`Server Open :::::: http://localhost:${PORT}`)
);
