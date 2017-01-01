console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // => create, modify and append an element, tag = 'section'
  var middleEarth = document.createElement('section')
  //=> set attribute type of element = 'id' and value = 'middle-earth'
  middleEarth.setAttribute('id', 'middle-earth')
  // append middle-earth to your document body
  body.appendChild(middleEarth)

  // add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
    var land = document.createElement('article')
    // inside each article tag include an h1 with the name of the land
    // must use innerHTML for making of HTML tags
    land.innerHTML = '<h1>' + lands[i] + '</h1>'
    middleEarth.appendChild(land)
  }
}
// call makeMiddleEarth()
makeMiddleEarth()


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // Create an ul tag element
  var shireList = document.createElement('ul')
  var firstArticle = document.querySelector('article')
  firstArticle.appendChild(shireList)

  // give each hobbit a class of hobbit
  // create an element with tag "li" with a new variable
  for (var i = 0; i < hobbits.length; i++) {
    var newHobbit = document.createElement('li')
    shireList.appendChild(newHobbit)
    newHobbit.textContent = hobbits[i]
    newHobbit.setAttribute('class', 'hobbit')
  }
}

makeHobbits()


  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'the-ring')
    // give the div a class of 'magic-imbued-jewelry'
    newDiv.setAttribute('class', 'magic-imbued-jewelry')
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    newDiv.addEventListener('click', nazgulScreech)
    // add the ring as a child of Frodo
    // Query on Frodo
    var frodo = document.querySelector('li')
    frodo.appendChild(newDiv)
  }
keepItSecretKeepItSafe()

  // Part 4


  function makeBuddies() {
    // create an aside tag
    var asideTag = document.createElement('aside')
    // attach an unordered list of the 'buddies' in the aside
    var buddiesUl = document.createElement('ul')
    asideTag.appendChild(buddiesUl)
    for (var i = 0; i < buddies.length; i++) {
      var newBuddy = document.createElement('li')
      buddiesUl.appendChild(newBuddy)
      newBuddy.textContent = buddies[i]
    }

    // insert your aside as a child element of rivendell
    // Query on rivendell
    var secondArticle = document.querySelectorAll('article')[1]
    secondArticle.appendChild(asideTag)
  }

makeBuddies()
  // Part 5


  function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    var aragorn = document.querySelectorAll('aside ul li')[3]
    aragorn.textContent = 'Aragorn'
  }
beautifulStranger()

  // Part 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var hobbits = document.querySelector('article ul')
    // article:nth-child(2) = 2nd article, nested
    var rivendell = document.querySelector('article:nth-child(2) aside')
    // append ul to parent aside
    rivendell.appendChild(hobbits)
  }
leaveTheShire()

  // Part 7


  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    var newDiv = document.createElement('div')
    newDiv.className = 'the-fellowship'
    var theArticle = document.querySelector('article:nth-child(2)')
    var newUl = document.createElement('ul')
    theArticle.appendChild(newDiv)
    newDiv.appendChild(newUl)

    // add each hobbit and buddy one at a time to 'the-fellowship'
    var newlist = document.querySelectorAll('li')
    for (var i = 0; i < newlist.length; i++) {
      newUl.appendChild(newlist[i])

  // after each character is added make an alert that they have joined your party
      alert(newlist[i].textContent + ' has joined the party')
    }
  }
  forgeTheFellowShip()


  // Part 8


  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    var gandalf = document.querySelector('.the-fellowship ul li')
    console.log(gandalf)

    // apply style to the element
    // make the background 'white', add a grey border
    gandalf.innerHTML = 'Gandalf the White'
    gandalf.style.backgroundColor = 'white'
    gandalf.style.borderColor = 'grey'
  }
theBalrog()

  // Part 9

  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    window.alert('The horn of Gondor has been blown')
    window.alert('Boromir\'s been killed by the Uruk-hai!')
    var boromir = document.querySelectorAll('li')[4]

    boromir.style.textDecoration = 'line-through'
    var parent = document.querySelector('.the-fellowship ul')
    console.log(parent)
    parent.removeChild(boromir)
  }
hornOfGondor()

  // Part 10

  function itsDangerousToGoAlone(){
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    var frodo = document.querySelector('.the-fellowship ul li:nth-child(5)')
    var sam = document.querySelector('.the-fellowship ul li:nth-child(6)')
    var morDiv = document.createElement('div')
    morDiv.setAttribute('id', 'mount-doom')
    var mordor = document.querySelector('article:nth-child(3)')
    mordor.appendChild(frodo)
    mordor.appendChild(sam)
    mordor.appendChild(morDiv)
  }
  itsDangerousToGoAlone()
  // Part 11

  function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    var golDiv = document.createElement('div')
    // golDiv.id = 'gollum'
    golDiv.setAttribute('id', 'gollum')
    var mordor = document.querySelector('article:nth-child(3)')
    mordor.appendChild(golDiv)

    var ring = document.querySelector('#the-ring')
    var gollum = document.querySelector('#gollum')
    // important here
    gollum.appendChild(ring)

    var mount = document.querySelector('#mount-doom')
    mount.appendChild(gollum)
  }
  weWantsIt()

  // Part 12

  function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the buddies from the document
    // Move all the hobbits back to the shire

    // Get the parent of the gollum (with the ring) 1st
    var mount = document.querySelector('#mount-doom')
    var gollum = document.querySelector('#gollum')
    mount.removeChild(gollum)

    var shire = document.querySelector('article:nth-child(1)')
    var newUl = document.createElement('ul')
    shire.appendChild(newUl)
    var hob = document.querySelectorAll('.hobbit')
    for (var i=0; i < hobbits.length; i++){
      newUl.appendChild(hob[i])
    }

    var bud = document.querySelector('.the-fellowship ul')
    var rem = document.querySelector('.the-fellowship')
    rem.removeChild(bud)
  }

  thereAndBackAgain()
