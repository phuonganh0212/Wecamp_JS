let myButton = Document.querySelector('button');
    let myHeading = Document.querySelector('h1');

    function setUserName() {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
      }

      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
    
      myButton.onclick = function() {
        setUserName();
      } 
