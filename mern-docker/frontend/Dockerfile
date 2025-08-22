# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY public ./public
COPY src ./src
RUN npm run build

# Runtime stage
FROM nginx:alpine
# Replace default server config with our proxying config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy React build
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

