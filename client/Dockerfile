# Utiliza una imagen oficial de Node.js como imagen base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/client

# Copia los archivos de configuración del proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente de tu aplicación
COPY . .

# Instala TypeScript globalmente en el contenedor
RUN npm install -g typescript

# Compila TypeScript y genera el código optimizado para producción
RUN npm run build
