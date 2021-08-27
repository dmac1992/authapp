#!/bin/bash
cd ../docker 
USERNAME=$(whoami)

#envvars file is used by apache when selecting what service user to run the apache process as.
cp envvars.example envvars
sed -i "s/www-data/$USERNAME/g" envvars

#username variable used in build process for creating the user that apache will run under.
docker build --build-arg username=$USERNAME -t authapp_image .





