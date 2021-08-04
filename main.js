let all = document.getElementById('all');
let shirts = document.getElementById('shirts')
let jeans = document.getElementById('pent')
let tshirts = document.getElementById('tshirts')
let watches = document.getElementById('watches')
let cards = document.querySelectorAll('.cards')

// Show all cards

all.addEventListener('click', (showAll) => {
  cards.forEach((cards) => {
    cards.classList.add('active')
  })
})

// Show all cards containg class "shirt"

shirts.addEventListener('click', (showShirts) => {
  cards.forEach((cards) => {
    if (cards.classList.contains('shirt')) {
      cards.classList.add('active')

    }else{
      cards.classList.remove('active')
    }
  })
})

// Show all cards containg class "jeans"
jeans.addEventListener('click', (showJeans) => {
  cards.forEach((cards) => {
    if (cards.classList.contains('jeans')) {
      cards.classList.add('active')

    } else {
      cards.classList.remove('active')
    }
  })
})

// Show all cards containg class "tshirt"

tshirts.addEventListener('click', (showTshirts) => {
  cards.forEach((cards) => {
    if (cards.classList.contains('tshirt')) {
      cards.classList.add('active')

    } else {
      cards.classList.remove('active')
    }
  })
})

// Show all cards containg class "watch"

watches.addEventListener('click', (showWatchs) => {
  cards.forEach((cards) => {
    if (cards.classList.contains('watch')) {
      cards.classList.add('active')

    } else {
      cards.classList.remove('active')
    }
  })
})