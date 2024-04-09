function showMessageByAttribute() {
  alert('Flower of the day is the rose')
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('myButton')
  button.onclick = function () {
    alert('The flower of the day is the tulip')
  }
})

function handler1() {
  alert('🌷')
}
function handler2() {
  alert('🪻')
}

const elem = document.getElementById('elem')
elem.addEventListener('click', handler1)
elem.addEventListener('click', handler2)

elem.removeEventListener('click', handleEvent)

elem.addEventListener('click', {
  handleEvent(event) {
    alert(event.type + ' on ' + event.currentTarget)
  },
})

document.addEventListener('click', function (event) {
  let id = event.target.dataset.toggleId
  if (!id) return
  let elem = document.getElementById(id)
  elem.hidden = !elem.hidden
})
