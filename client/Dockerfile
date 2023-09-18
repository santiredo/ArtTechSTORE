# Utiliza una imagen oficial de Node.js como imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /vite/client  # Cambia a la carpeta 'client'

# Copia los archivos de configuración del proyecto (package.json y package-lock.json)
COPY package*.json ./

RUN rm -rf node_modules
RUN rm package-lock.json

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente de tu aplicación
COPY . .

# Instala TypeScript globalmente en el contenedor
RUN npm install -g typescript

# Compila TypeScript y genera el código optimizado para producción
RUN npm run build

# Expone un puerto si tu aplicación lo necesita (ajusta esto según sea necesario)
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "run", "start"]
