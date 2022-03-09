import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Pizza'
];

function menuMaker(menuItems){
  
  const container = document.createElement('div');
  const ul = document.createElement('ul');
  const menuButton = document.querySelector('.menu-button')

  container.appendChild(ul);
  
  container.classList.add('menu');

  menuButton.addEventListener('click', () => {
    console.log('clicked')
    container.classList.toggle('menu--open')
  })

  menuItems.forEach(item => {
    const list = document.createElement('li');
    list.textContent = item
    ul.appendChild(list)
  })

  return container
}

const header = document.querySelector('.header')
header.append(menuMaker(menuItems))

/*
  --- DONE ---
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
  -------

  ---DONE---
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
  ------

  ---DONE---
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  ------

  ---DONE---
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  ------

  ---DONE---
  Step 5: Don't forget to return your div.menu.
  ------

  
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  ------
*/
