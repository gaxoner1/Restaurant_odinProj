function mainpage () {
  const content = document.querySelector("#content");

  const home = document.createElement("BUTTON");
  home.setAttribute("class", "button");
  home.innerHTML = "Home";
  content.appendChild(home);

  const about = document.createElement("BUTTON");
  about.setAttribute("class", "button");
  about.innerHTML = "About";
  content.appendChild(about);


  const contact = document.createElement("BUTTON");
  contact.setAttribute("class", "button");
  contact.innerHTML = "Contact";
  content.appendChild(contact);


  const title = document.createElement("H1");
  title.setAttribute("id", "Title");
  title.innerHTML = "Restuarant Page";
  content.appendChild(title);


  const text = document.createElement("H2");
  text.setAttribute("id", "para");
  text.innerHTML = "This is a restuarant with yummy food";
  content.appendChild(text);

  const img = document.createElement("IMG");
  img.setAttribute("id", "pic");
  //img.src = "https://casasensei.com/wp-content/uploads/2019/06/South-Indian-Bruschetta-Recipe.jpg";
  content.appendChild(img);


  console.log("its working")


};

export { mainpage }
