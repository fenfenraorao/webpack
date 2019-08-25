FROM nginx

COPY ./dist /usr/share/nginx/html/
# update custom nginx conf reason by vue-router
COPY ./default.conf /etc/nginx/conf.d/
# run script
COPY entrypoint.sh /data/run/

RUN chmod 755 /data/run/entrypoint.sh


EXPOSE 80
CMD ["/data/run/entrypoint.sh"]
