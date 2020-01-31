# Static blog page, with Vue/Gridsome and Wordpress

Create a static blog page, using Vue/Gridsome (for frontend) and Wordress (for backend).

### Used extra gridsome plugins

- source-wordpress (Parse wordpress posts)
<https://gridsome.org/plugins/@gridsome/source-wordpress>

- plugin-google-analytics (Google Analytics plugin for Gridsome)
<https://github.com/gridsome/gridsome/tree/master/packages/plugin-google-analytics>

- gridsome-plugin-rss (Create RSS feed)
<https://gridsome.org/plugins/gridsome-plugin-rss>

- plugin-sitemap (Create sitemap file)
<https://gridsome.org/plugins/@gridsome/plugin-sitemap>

### Extra Vue components were written, for comments, google adsense etc.

## Setup Wordpress 

Install wordpress on your server <https://wordpress.org/>

### Set permanent links like this, at wordpress settings

 `` /2020/01/25/sample-post/ ``

### Edit .htaccess file

```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

## For JWT authentication
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
# END WordPress
```

### Install wordpress plugins

- autoconvert-greeklish-permalinks (For Greek blogs you have to convert slug titles to greeklish)

<https://el.wordpress.org/plugins/autoconvert-greeklish-permalinks/>

- JWT Authentication for WP REST API (Used to post comments, using the Wordpress API)

<https://el.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/>

### Add to wp-config, before ``define('WP_DEBUG', false);``

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
```

You can take a key from <https://api.wordpress.org/secret-key/1.1/salt/>

### Set multimedia full path for files, at wordrpess settings

### Create a user, with editor role, for comments (used for authentication on comments Wordpress API)

### Make and empty theme


## Setup frontend (Gridsome/Vue)

You need to have npm installed <https://www.npmjs.com/get-npm>

### Install gridsome

```
npm install --global @gridsome/cli
```

### Download the project

```
git clone https://github.com/ikiranis/blog-static.git .
```

(or download the zip <https://github.com/ikiranis/blog-static/archive/master.zip>)

Go to the project's path

### Install depedencies

```
npm install
```

### Edit the .env file with your settings

Copy .env.example to .env

Edit .env file with your settings

### Build the project

For dev mode run:

```
gridsome develop
```

For production run:

```
gridsome build
```

Your site will be in the **dist** folder. Copy these files to your
web space or setup your web server to publish dist folder.

**If you want anything in root directory (e.g. ads.txt file) create it in /static folder**
