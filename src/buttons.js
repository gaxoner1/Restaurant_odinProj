import { mainpage } from './mainpage.js';

function btnNav () {
  console.log('reached 4 of buttons.js')
  let buttonEl = document.getElementsByClassName('button');

  for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('click', function() {
      let buttonEl[i].innerHTML = btnText
      console.log("reached butons.js")
       switch(btnText) {
        case 'Home':
          alert('Home Clicked')
          break;
        case 'About':
          alert('About Clicked')
          break;
        case 'Contact':
          alert('Contact Clicked')
          break;
        }
    });
  };
}

export { btnNav }
