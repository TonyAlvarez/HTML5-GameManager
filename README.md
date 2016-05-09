# HTML5 Games Hub

Proyecto final de DAW

## Requisitos del proyecto

* [Node.JS](https://nodejs.org)
* [Composer](https://getcomposer.org/download/)

### Instrucciones de instalación en servidor local

1. Crear un host virtual que apunte a la carpeta `public`
2. Ejecutar `composer install` y `npm install` en la raíz del proyecto

### Pasos para compilar el tema de Bootstrap con Gulp:

1. Instalar `Node.JS`
2. Ejecutar el comando `npm install`
3. Ejecutar `gulp less` para compilar el Less a CSS
4. Ejecutar `gulp copy` para copiar el CSS a la carpeta `public`

### Crear la base de datos y rellenarla con datos usando Faker:

1. En la raíz del proyecto ejecutar los siguientes comandos:

- `php artisan migrate`
- `php artisan db:seed --class=UserSeeder`
