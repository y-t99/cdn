FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get update && apt-get install -y ca-certificates curl gnupg && \
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
  apt-get update && apt-get install nodejs -y

COPY . /usr/app 

WORKDIR /usr/app 

RUN npm install

EXPOSE 80

CMD service nginx start && node dist/app.js