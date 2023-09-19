import { sequelize } from "./db";
import server from "./server";
import 'dotenv/config';

const PORT = process.env.PORT || 3001

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error(error);
  });
