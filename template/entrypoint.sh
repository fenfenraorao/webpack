#!/bin/bash

# replace the frented params
sed -i "s|BASEURL|$BASEURL|g" /usr/share/nginx/html/static/conf.js

# run nginx
exec /usr/sbin/nginx -g "daemon off;"

