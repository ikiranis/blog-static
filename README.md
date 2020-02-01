# Static blog page, with Vue/Gridsome and Wordpress

Create a static blog page, using Vue/Gridsome (for frontend) and Wordpress (for backend).

### Demo

<https://error.gr>

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

- JWT Authentication for WP REST API (Used to post comments with the Wordpress API)

<https://el.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/>

### Add to wp-config, before ``define('WP_DEBUG', false);``

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
```

You can take a key from <https://api.wordpress.org/secret-key/1.1/salt/>

### Set multimedia full path for files, at wordrpess settings

### Create a user, with editor role, for comments (used for authentication on comments Wordpress API)

### Make an empty theme and set wordpress to use this

- Create **headless** folder in themes
- Create **/headless/functions.php** file and add:

```
<?php

function mytheme_post_thumbnails() {
    add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'mytheme_post_thumbnails' );
```

- Create **/headless/index.php** file and add:

```
<script type="text/javascript">
	window.location = 'https://mySite.com';
</script>
```

(Redirect the user to your new static site)

- Create **/headless/style.css**

```
/*
* Theme Name: headless
* Description: A blank theme
* Author: Yiannis Kiranis
* Theme URI: https://apps4net.eu
* Author URI: https://apps4net.eu
* Version: 1.0.0
* Tags: blank
* License: GNU General Public License v2.0
* License URI: http://www.gnu.org/licenses/gpl-2.0.html

* Browser Compatibility: Latest versions of IE10, Chrome, Opera, Safari, Firefox. IE9 and below are not supported.

* This theme, like WordPress, is licensed under the GPL.
* Use it to make something cool, have fun, and share what you've learned with others.
```

(change these with everything you want)

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

**You have to build the site, after any new post in wordpress** 

**Change /src/favicon.png and /src/images/logo.jpg with your images**
