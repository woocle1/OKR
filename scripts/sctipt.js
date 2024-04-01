function userDialog() {
  let userName = prompt("Введіть ваше ім'я:")

  if (userName) {
    alert(`Привіт, ${userName}! Як справи?`)

    let response
    do {
      response = prompt('Як ви себе почуваєте?')
      if (response === 'добре') {
        alert('Це чудово! Продовжуйте так!')
      } else if (response === 'погано') {
        alert('Не переймайтесь, усе налагодиться!')
      } else {
        alert('Вибачте, я не зрозумів вашу відповідь. Спробуйте ще раз.')
      }
    } while (response !== 'добре' && response !== 'погано')
  } else {
    alert("Будь ласка, введіть ваше ім'я для початку діалогу.")
  }
}

function showDeveloperInfo(firstName, lastName, position = 'Web developer') {
  alert(
    'Прізвище: ' + lastName + "\nІм'я: " + firstName + '\nПосада: ' + position
  )
}

function compare() {
  let a, b

  do {
    a = prompt('Введіть перший рядок для порівняння:')
  } while (a === null || a.trim() === '')

  do {
    b = prompt('Введіть другий рядок для порівняння:')
  } while (b === null || b.trim() === '')

  if (a > b) {
    alert('Перший рядок більший: ' + a)
  } else if (a < b) {
    alert('Другий рядок більший: ' + b)
  } else {
    alert('Рядки рівні.')
  }
}

function changeBackground() {
  document.body.style.backgroundColor = 'red'

  setTimeout(function () {
    document.body.style.backgroundColor = ''
  }, 30000)
}

function redirect() {
  setTimeout(function () {
    location.href =
      'https://www.patchplants.com/gb/en/w/product-type/plants/environment/indoor/'
  }, 10000)
}

function HNselect() {
  let mainTitle = document.getElementById('line1')
  mainTitle.textContent = 'HOME page'
}

function HNselect2() {
  let mainTitles = document.querySelectorAll(
    '.main-title h1, .main-title #line1'
  )
  mainTitles.forEach(function (title) {
    title.textContent = 'HOME PAGE'
  })
}

function changeHTML() {
  let lineEdit2 = document.querySelector('.main-second-part')
  let lineEdit3 = document.querySelector('.main-third-part')

  lineEdit2.innerHTML =
    '<p>Experience the natural harmony within your home by incorporating our indoor plants, which not only add vitality but also create a warm and inviting atmosphere.</p>'

  lineEdit3.outerHTML =
    '<div class="main-second-part"><p>In addition to providing a wide selection of indoor plants to suit your needs and enhance your interior design, our team of experts is dedicated to assisting you in selecting the perfect plant.</p></div>'

  let textNode = document.createTextNode(
    'Choose our indoor plants to elevate your living space and embrace the myriad benefits they offer.'
  )
  console.log(textNode.nodeValue)

  let newParagraph = document.createElement('p')
  newParagraph.textContent =
    'We offer valuable tips on plant care to ensure they continue to bring joy and beauty into your space throughout the year.'
  document.querySelector('.main-second-part').appendChild(newParagraph)
}

function newHeader() {
  let newHeading = document.createElement('h2')
  let headingText = document.createTextNode('About us')
  newHeading.appendChild(headingText)
  let contentDiv = document.querySelector('.main-first-part')
  contentDiv.prepend(newHeading)
}

function newPlant() {
  let newPlant = document.createElement('li')
  let plantText = document.createTextNode('Aloe Vera')
  newPlant.appendChild(plantText)
  let plantsList = document.querySelector('.main-second-part ol')
  plantsList.append(newPlant)
}

function deletePlant() {
  let plantsList = document.querySelector('.main-second-part ol')
  let lastPlantIndex = plantsList.children.length - 1
  let lastPlant = plantsList.children[lastPlantIndex]
  lastPlant.remove()
}

function changePlant() {
  let plantsList = document.querySelector('.main-second-part ol')
  let firstPlant = plantsList.getElementsByTagName('li')[0]
  firstPlant.textContent = 'Plantain'
}

function addLink() {
  let shopLink = document.createElement('a')
  shopLink.href = 'https://thestem.co.uk/indoor-plants/areca-palm'
  shopLink.textContent = 'Go to the shop'
  let plantsList = document.querySelector('.main-second-part ol')
  plantsList.after(shopLink)
}

showDeveloperInfo('Andrii', 'Tiuska')
compare()
redirect()
