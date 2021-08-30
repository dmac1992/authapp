FROM php:7.4-apache

ARG username
RUN useradd $username

RUN apt-get update -y && apt-get upgrade -y

RUN pecl install xdebug-3.0.3 && docker-php-ext-enable xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get install -y libxml2-dev git p7zip-full unzip nodejs npm

RUN docker-php-ext-install pdo_mysql

RUN touch /usr/local/etc/php/php.ini

RUN rm /etc/apache2/sites-available/*

RUN rm /etc/apache2/sites-enabled/*

RUN a2enmod rewrite

