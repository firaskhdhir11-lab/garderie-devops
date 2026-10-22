FROM node:22-bookworm-slim
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY package.json package-lock.json ./
COPY node_modules ./node_modules
COPY server.js ./server.js

EXPOSE 4000
CMD ["npm", "start"]
