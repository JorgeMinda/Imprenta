# Imagen de desarrollo para el Motor Contable SRI.
# Wasp >= 0.22 exige Node >= 22.22.2.
FROM node:22-bookworm

# CLI de Wasp, fijado a la misma versión que app.wasp (wasp.version).
RUN npm install -g @wasp.sh/wasp-cli@0.25.0

WORKDIR /app

# Puerto del cliente (Vite) y del servidor API.
EXPOSE 3000 3001

# Por defecto levanta el servidor de desarrollo.
# Para migraciones/tests se sobreescribe el command en docker compose o con:
#   docker compose run --rm wasp wasp db migrate-dev
#   docker compose run --rm wasp wasp test
CMD ["wasp", "start", "--no-dependent-start"]
