const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm',]
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

//keyboard input
document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key 
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

// Plays audio of keys
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0 // allows you to repeatadly press key
  noteAudio.play()
  key.classList.add('active') // adds color when key pressed
  noteAudio.addEventListener('ended', () => { //removes active class when sound is done
    key.classList.remove('active')
  })
}