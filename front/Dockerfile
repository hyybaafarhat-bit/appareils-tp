# Étape 1 : Compilation de l'application Angular
FROM node:24-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# On compile l'application
RUN npm run build -- --configuration production

# Étape 2 : Serveur web Nginx pour servir les fichiers
FROM nginx:alpine
# On copie le build généré dans Nginx
COPY --from=build /app/dist/front/browser /usr/share/nginx/html
# On expose le port 80
FROM nginx:alpine
COPY --from=build /app/dist/front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80