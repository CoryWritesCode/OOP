$(document).ready(function () {
  const MAX = 600;
  let c = 0;
  let r = 0;
  let s = 0;
  let t = 0;

  function randomVal(max, min) {

    return Math.round(Math.random() * (max - min)) + min;

  };

  function describe(name, width, height, radius) {

    $('span').empty();

    let area = 0;
    let parimeter = 0;

    if (name === 'Circle') {

      area = Math.round(2 * Math.PI * radius);
      parimeter = Math.round(Math.PI * Math.pow(radius, 2));
      width = radius * 2;
      height = radius * 2;

    } else if (name === 'Rectangle' || name === 'Square') {

      parimeter = (height * 2) + (width * 2);
      area = height * width;
      radius = 'N/A';

    } else {

      parimeter = Math.round(2 * height + Math.sqrt(2) * height);
      area = 0.5 * height * height;
      width = height;
      radius = 'N/A';
      console.log(name);
      

    }

    $('#nameAttr').append(`${name}`).text();
    $('#widthAttr').append(`${width}`).text();
    $('#heightAttr').append(`${height}`).text();
    $('#radiusAttr').append(`${radius}`).text();
    $('#areaAttr').append(`${area}`).text();
    $('#parimeterAttr').append(`${parimeter}`).text();

  }

  class Shape {

    constructor(name) {

      this.name = name;

    };

  };

  class Circle extends Shape {

    constructor(radius, name) {

      super(name)
      this.radius = radius;

      $(`<div class="circle${c}"></div>`).appendTo('.canvas');

      $(`.circle${c}`).css({

        'border': '1px solid transparent',
        'border-radius': '50%',
        'height': `${this.radius}px`,
        'width': `${this.radius}px`,
        'background-color': 'purple',
        'margin-top': `${randomVal((MAX - radius), 0)}px`,
        'margin-left': `${randomVal((MAX - radius), 0)}px`

      });

      $(`.circle${c}`).click(function () {

        describe(name, 0, 0, radius);

      });

      $(`.circle${c}`).dblclick(function () {

        this.remove();
        $('span').empty();

      });

      c++

    };

  };

  class Rectangle extends Shape {

    constructor(width, height, name) {

      super(name)
      this.width = width;
      this.height = height;

      $(`<div class="rect${r}"></div>`).appendTo('.canvas');

      $(`.rect${r}`).css({

        'border': '1px solid transparent',
        'height': `${this.height}px`,
        'width': `${this.width}px`,
        'background-color': 'green',
        'margin-top': `${randomVal((MAX - height), 0)}px`,
        'margin-left': `${randomVal((MAX - width), 0)}px`

      });

      $(`.rect${r}`).click(function () { 
        
        describe(name, width, height, 'N/A')
        
      });

      $(`.rect${r}`).dblclick(function () {

        this.remove();
        $('span').empty();

      });

      r++

    };

  };

  class Square extends Shape {

    constructor(sideLength, name) {

      super(name)
      this.sideLength = sideLength;

      $(`<div class="square${s}"></div>`).appendTo('.canvas');

      $(`.square${s}`).css({

        'border': '1px solid transparent',
        'height': `${this.sideLength}px`,
        'width': `${this.sideLength}px`,
        'background-color': 'red',
        'margin-top': `${randomVal((MAX - sideLength), 0)}px`,
        'margin-left': `${randomVal((MAX - sideLength), 0)}px`

      });

      $(`.square${s}`).click(function () {

        describe(name, sideLength, sideLength, 'N/A')

      });

      $(`.square${s}`).dblclick(function () {

        this.remove();
        $('span').empty();

      });

      s++

    };

  };

  class Triangle extends Shape {

    constructor(height, name) {

      super(name)
      this.height = height;

      $(`<div class="triangle${t}"></div>`).appendTo('.canvas');

      $(`.triangle${t}`).css({

        'border-right': `${this.height}px solid transparent`,
        'border-left': `${this.height}px solid transparent`,
        'border-bottom': `${this.height}px solid yellow`,
        'height': `0`,
        'width': `0`,
        'margin-top': `${randomVal((MAX - height), 0)}px`,
        'margin-left': `${randomVal((MAX - (height * 2)), 0)}px`

      });

      $(`.triangle${t}`).click(function () {

        describe(name, height, height, 'N/A')

      });

      $(`.triangle${t}`).dblclick(function () { 

        this.remove();
        $('span').empty();

      });

      t++

    };

  };

  $('#insertCircle').click(function (e) {

    let circleRadius = $('#circleRadius').val();
    $('#circleRadius').val('');

    if (circleRadius > 600) {

      alert("Sorry! That's too big for this area! Please pick a smaller number. :)");

    } else {

    new Circle(circleRadius, 'Circle');

    };

    e.preventDefault();

  });

  $('#insertRect').click(function (e) {

    let rectHeight = $('#rectHeight').val();
    let rectWidth = $('#rectWidth').val();
    $('#rectHeight').val('');
    $('#rectWidth').val('');

    if (rectHeight > 600 || rectWidth > 600) {

      alert("Sorry! That's too big for this area! Please pick a smaller number. :)");

    } else {

      if (rectHeight === rectWidth) {

        alert("You're thinking of a square. Try that.")

      } else {

        new Rectangle(rectWidth, rectHeight, 'Rectangle');

      };

    };

    e.preventDefault();

  });

  $('#insertSquare').click(function (e) {

    let sqSideLength = $('#sqSideLength').val();
    $('#sqSideLength').val('');

    if (sqSideLength > 600) {

      alert("Sorry! That's too big for this area! Please pick a smaller number. :)");

    } else {

      new Square(sqSideLength, 'Square');

    };

    e.preventDefault();

  });

  $('#insertTriangel').click(function (e) {

    let height = $('#triHeight').val();
    $('#triHeight').val('');

    if (height > 300) {

      alert("Sorry! That's too big for this area! Please pick a smaller number. :)");

    } else {

      new Triangle(height, 'Triangle');

    };

    e.preventDefault();

  });

});