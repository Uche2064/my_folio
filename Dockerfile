# Étape 1 : builder
FROM node:24 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Next.js
RUN npm run build

# Étape 2 : production
FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 4000

CMD ["npm", "run", "start", "--", "-p", "4000", "-H", "0.0.0.0"]
