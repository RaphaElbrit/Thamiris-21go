FROM nginx:alpine

# Copia configuração do Nginx com suporte a portas 80 e 8000
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos do site para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

EXPOSE 80
EXPOSE 8000

