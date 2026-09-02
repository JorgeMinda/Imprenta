FROM node:24-bookworm

RUN npm install -g @wasp.sh/wasp-cli@0.24

WORKDIR /app

EXPOSE 3000 3001

CMD ["wasp", "start"]
