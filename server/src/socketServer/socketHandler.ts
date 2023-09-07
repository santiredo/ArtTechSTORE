import { Server, Socket } from "socket.io";
import { createServer } from "http";
import server from "../server";

const httpServer = createServer(server);
const io = new Server(httpServer);

// Defino un mapa (socketMap) para realizar un seguimiento de los sockets conectados.
const socketMap = new Map<string, Socket>();

function getSocketPorId(id: string): Socket | undefined {
  return socketMap.get(id);
}

function registrarSocket(id: string, socket: Socket): void {
  socketMap.set(id, socket);
}

function eliminarSocket(id: string): void {
  socketMap.delete(id);
}

io.on("connection", (socket: Socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  socket.on("enviarRol", (data) => {
    const { rol, id } = data;
    console.log(`El usuario con ID ${id} y rol ${rol} se ha conectado.`);
    // Registra el socket
    registrarSocket(id, socket);
    // Escucha los mensajes del usuario
    socket.on("mensajeDesdeUsuario", (mensaje) => {
      console.log(`El usuario con ID ${id} envió el siguiente mensaje: ${mensaje}`);
      // Enviar el mensaje al artista correspondiente
      const idArtista = "2"; // Cambia a la ID real del artista
      const socketArtista = getSocketPorId(idArtista);
      if (socketArtista) {
        socketArtista.emit("mensajeDesdeUsuario", { id, mensaje });
      }
    });

    // Maneja la desconexión del usuario
    socket.on("disconnect", () => {
      console.log(`El usuario con ID ${id} se ha desconectado.`);
      eliminarSocket(id);
    });
  });
});

export default io;







// archivo del front para usar :



// components/EnviarMensaje.tsx

// import { useState } from 'react';
// import { io } from 'socket.io-client';

// const EnviarMensaje: React.FC = () => {
//   const [mensaje, setMensaje] = useState('');

//   const enviarMensaje = () => {
//     const socket = io('http://localhost:3001'); // Reemplaza con la URL correcta de tu servidor

//     // Obtener el ID del usuario y el rol desde tu aplicación
//     const idUsuario = '1'; // Por ejemplo, asumimos que el ID del usuario es '1'
//     const rolUsuario = 'user'; // Asumimos que el rol del usuario es 'user'

//     socket.emit('enviarRol', { rol: rolUsuario, id: idUsuario });

//     socket.emit('mensajeDesdeUsuario', mensaje);

//     // Cerrar el socket después de enviar el mensaje
//     socket.disconnect();
//   };

//   return (
//     <div>
//       <textarea
//         value={mensaje}
//         onChange={(e) => setMensaje(e.target.value)}
//         placeholder="Escribe tu mensaje aquí"
//       />
//       <button onClick={enviarMensaje}>Enviar Mensaje</button>
//     </div>
//   );
// };

// export default EnviarMensaje;




















// import server from "../server";
// import { createServer } from "http";
// import { Server as socketServer } from "socket.io";

// // Crea el servidor HTTP
// const httpServer = createServer(server);
// // Inicializa Socket.IO
// const io = new socketServer(httpServer);
// // Configura Socket.IO
// io.on("connection", (socket) => {
//   console.log("Nuevo cliente conectado:", socket.id);
//   socket.on("mensaje", (data) => {
//     console.log("Mensaje recibido:", data);
//     socket.emit("respuesta", "¡Mensaje recibido correctamente!");
//   });
//   socket.on("disconnect", () => {
//     console.log("Cliente desconectado:", socket.id);
//   });
// });
