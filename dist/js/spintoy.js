/*
	Source:
	van Creij, Maurice (2018). "spintoy.js: An animated interaction effect.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var SpinToy = function (config) {

	this.only = function (config) {
		// start an instance of the script
		return new this.Main(config, this);
	};

	this.each = function (config) {
		var _config, _context = this, instances = [];
		// for all element
		for (var a = 0, b = config.elements.length; a < b; a += 1) {
			// clone the configuration
			_config = Object.create(config);
			// insert the current element
			_config.element = config.elements[a];
			// start a new instance of the object
			instances[a] = new this.Main(_config, _context);
		}
		// return the instances
		return instances;
	};

	return (config.elements) ? this.each(config) : this.only(config);

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = SpinToy;
}

// extend the class
SpinToy.prototype.Main = function(config, context) {

	// PROPERTIES
	this.element = config.element;
	this.rotation = 0;
	this.speed = 0;
	this.acceleration = 0;

	// METHODS

	this.spin = function () {
		// update speed
		this.speed = Math.max(Math.min(this.speed + this.acceleration, 2), 0);
		// update the rotation
		this.rotation += this.speed;
		// apply the rotation
		this.element.style.transform = 'rotate(' + this.rotation + 'deg)';
		// request the next frame
		if (this.speed > 0) window.requestAnimationFrame(this.spin.bind(this));
	};

	this.onSpinUp = function (evt) {
		// start the spin
		this.acceleration = 0.05;
		if (this.speed === 0) window.requestAnimationFrame(this.spin.bind(this));
	};

	this.onSpinDown = function (evt) {
		// end the spin
		this.acceleration = -0.05;
	};

	// EVENTS

	this.element.parentNode.addEventListener('mouseover', this.onSpinUp.bind(this));
	this.element.parentNode.addEventListener('mouseout', this.onSpinDown.bind(this));
	this.element.parentNode.addEventListener('touchstart', this.onSpinUp.bind(this));
	this.element.parentNode.addEventListener('touchend', this.onSpinDown.bind(this));
	this.spin();

};
