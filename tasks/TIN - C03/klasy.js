class Shape {
	_color

	constructor(color){
		this._color=color
	}

	get color() {
		return this._color
	}
	set color(value) {
		this._color = value
	}
}

class TwoDimensionalShape extends Shape {
	_center

	constructor(color, center) {
		super(color)
		this._center = center
	}

	get center() {
		return this._center
	}
	set center(value) {
		this._center = value
	}
}

class Circle extends TwoDimensionalShape {
	_radius

	constructor(color, center,radius) {
		super(color,center)
		this._radius = radius
	}

	get radius() {
		return this._radius
	}
	set radius(value) {
		this._radius = value
	}
}

class Rectangle extends TwoDimensionalShape {
	_lengthA
	_lengthB

	constructor(color, center,lengthA,lengthB) {
		super(color,center)
		this._lengthA = lengthA
		this._lengthB = lengthB
	}


	get lengthA() {
		return this._lengthA
	}
	set lengthA(value) {
		this._lengthA = value
	}

	get lengthB() {
		return this._lengthB
	}
	set lengthB(value) {
		this._lengthB = value
	}
}