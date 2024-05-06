# spintoy.js: An animated interaction effect.

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

A spinning animation to attract attention.

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

Or use imported as a component in existing projects.

```js
@import {SpinToy} from "js/spintoy.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
