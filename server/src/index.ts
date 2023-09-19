import { sequelize } from "./db";
import server from "./server";

const { DB_PORT } = process.env;

sequelize.sync({ force: false }).then(() => {
    server.listen(() => {
      console.log(`%s listening`);
    });
  })
  .catch((error: any) => {
    console.error(error);
  });
