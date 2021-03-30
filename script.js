// console.log( document  )

// methods to target elements

// getElementById
// getElementsByClassName
// by tag
// byt element

// let myParagraphs = document.getElementsByClassName('paragraph')
// console.log(myParagraphs)

// ---------querySelector----------
// use # to target ids
let title = document.querySelector("#title1");

// use . to target classes
let myParagraph = document.querySelector(".paragraph");

// use the element name to target elements
let header = document.querySelector("h5");

let element = document.getElementById("title1");

// ---------querySelectorAll----------
// let allParagraphs = document.querySelectorAll('.paragraph')
//console.log(allParagraphs)

// targetting specific elements
let myInput = document.querySelector('.myInputs input[type="text"]');
//console.log(myInput)

let allParagraphs = document.querySelectorAll(".paragraph");
//console.log(allParagraphs)

// allParagraphs is a NodeList
allParagraphs.forEach((singleParagraph, index) => {
  // console.log(singleParagraph.classList)
  //targetting by class
  if (singleParagraph.className.includes("newClass")) {
    // console.log('This paragraph has newClass')
    // console.log(singleParagraph.innerText)
  }

  // targetting by index
  if (index == 1) {
    //console.log(singleParagraph)
  }
});

// dom methods/properties

element.setAttribute("class", "my title");
element.id = "myId";

element.classList.add("newClass"); // add the class to the class attribute
element.classList.remove("title");
// element.className -> gives all classes as string
// element.innerText
// element.innerHTML

element.style.color = "red";
element.style.marginLeft = "30px";

// innerText vs innerHTML

// let section = document.querySelector('.products')
// console.log(section)
// console.log(section.innerHTML)
// console.log(section.innerText)

let section = document.querySelector(".products");
console.log(section);

let header5 = section.querySelector("h5");
console.log(header5);
