$(document).ready(function () {

  class Shape {

    constructor(name, area, parimeter) {

      this.name = name;
      this.area = area;
      this.parimeter =parimeter;

    }

  }

  class Circle extends Shape {

    constructor(radius) {

      super(name, area, parimeter)
      this.radius = radius;

    }

  }

  class Rectangle extends Shape {

    constructor(width, height) {

      super(name, area, parimeter)
      this.width = width;
      this.height = height;

    }

  }

  class Square extends Shape {

    constructor(sideLength) {

      super(name, area, parimeter)
      this.sideLength = sideLength;

    }

  }

  class Circle extends Shape {

    constructor(radius) {

      super(name, area, parimeter)
      this.radius = radius;

    }

  }

  class Triangle extends Shape {

    constructor(height) {

      super(name, area, parimeter)
      this.height = height;

    }

  }

});