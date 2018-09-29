document.addEventListener("DOMContentLoaded", function () {
  let c = 0;
  let n = 0;

  document.body.style.cssText = "display:flex; flex-wrap:wrap;"

  class Die {

    constructor(value) {

      if (c === 0) {

        // Create roll again button after first die appears
        let rollAgain = document.createElement('button');
        let rollAgainText = document.createTextNode('Roll Again!');
        rollAgain.appendChild(rollAgainText);
        rollAgain.setAttribute('id', 'rollOver');
        document.body.appendChild(rollAgain);

      };

      // Create die
      let die = document.createElement('div');
      die.className = 'aDie';
      die.setAttribute('id', `die${n}`);
      die.style.cssText = "height:100px; width:100px; border:2px solid black; border-radius:8px; text-align:center; font-size:85px; margin:5px;";
      document.body.appendChild(die);
      this.roll(die);
      c = 1;
      n++;

      // Reroll all die
      let reRoll = document.getElementById('rollOver');
      reRoll.addEventListener('click', () => {

        let value = Math.floor((Math.random() * 6) + 1);
        die.innerHTML = value;

      });

      // Reroll specific die
      die.addEventListener('click', function (die) {

        let value = Math.floor((Math.random() * 6) + 1);
        this.innerHTML = value;

      })

      // Remove double clicked die
      die.addEventListener('dblclick', function (die) {

        this.remove();

      });

    };

    // Inital roll for new die
    roll(die) {

      let value = Math.floor((Math.random() * 6) + 1);
      die.innerHTML = value;

    };

  };

  // Create new die by clicking the button
  let genDie = document.getElementById('genDie');
  genDie.addEventListener('click', () => {

    new Die();

  });

  // Add all the dice values on the screen
  let sumBtn = document.getElementById('calcSum');
  sumBtn.addEventListener('click', () => {

    let allDice = document.getElementsByClassName('aDie');
    let nums = [];

    [].forEach.call( allDice, function (e) {

      nums.push(Number(e.textContent));

    })

    alert(nums.reduce(

      (acc, val) => acc + val
      ,0

    ));

  });

})