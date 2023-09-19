import { sequelize } from "./db";
import server from "./server";

const { DB_PORT } = process.env;

sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(3001, () => {
      console.log(`Server listening on port ${DB_PORT}`);
    });
  })
  .catch((error: any) => {
    console.error(error);
  });
