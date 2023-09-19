import { sequelize } from "./db";
import server from "./server";
import io from "./socketServer/socketHandler";

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
