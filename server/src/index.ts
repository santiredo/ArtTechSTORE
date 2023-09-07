import { sequelize } from "./db";
import server from "./server";
import io from "./socketServer/socketHandler";

const PORT = 3001;


sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(io)
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    // Declara el tipo del parámetro 'error'
    console.error(error);
  });
