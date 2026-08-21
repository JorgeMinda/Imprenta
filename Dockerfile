# Imagen de desarrollo para el Motor Contable SRI.
# Wasp >= 0.22 requiere Node >= 22.22.2 (tú tienes 22.23.2, OK).
# Pero Wasp 0.25.0 exige Node >= 24.22.2. Por usamos Node 24.
FROM node:24-bookworm

# Instalar el CLI de Wasp, fijado a la versión que usa tu app.wasp (0.25.0).
RUN npm install -g @wasp.sh/wasp-cli@0.25.0

WORKDIR /app

# Puertos del cliente (Vite) y del servidor API.
EXPOSE 3000 3001

# Comando por defecto: levantar el servidor de desarrollo.
# Para migraciones/tests se sobreescribe el command en docker compose o con:
#   docker compose run --rm wasp wasp db migrate-dev
#   docker compose run --rm wasp wasp test
CMD ["wasp", "start", "--no-dependent-start"]