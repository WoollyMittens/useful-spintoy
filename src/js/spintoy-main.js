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
