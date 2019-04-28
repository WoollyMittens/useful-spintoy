# spintoy.js: An animated interaction effect.

A spinning animation to attract attention.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-spintoy">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/spintoy.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/spintoy.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/spintoy.js'
], function(SpinToy) {
	...
});
```

Or import into an MVC framework.

```js
var SpinToy = require('js/spintoy.js');
```

## How to start the script

```html
<figure class="spintoy">
	<span class="spintoy-icon-bg">&nbsp;</span>
	<span class="spintoy-icon-fg"><img alt="" src="img/logo_magento.png"></span>
	<figcaption>
		<h4>Lorem</h4>
		<p>Ipsum dolor sit amet.</p>
	</figcaption>
</figure>
```

```javascript
var spintoy = new SpinToy({
	'elements': document.querySelectorAll('.spintoy-icon-bg')
});
```

**'elements' : {DOM nodes}** - The elements to watch and/or affect.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
