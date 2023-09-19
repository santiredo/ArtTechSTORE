import { sequelize } from "./db";
import server from "./server";
import io from "./socketServer/socketHandler";

const { DB_PORT } = process.env;

sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(() => {
      console.log(`Server listening`);
    });
  })
  .catch((error: any) => {
    console.error(error);
  });
