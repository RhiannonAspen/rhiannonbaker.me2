# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine

# Remove default server config
RUN rm /etc/nginx/conf.d/default.conf

# Copy main nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build output (SPA)
COPY --from=build /app/dist /usr/share/nginx/html

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
