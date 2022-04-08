// We could just change the advice ID text to capital letters in the HTML, but it was provided without capitals. For practice, we'll set it to capitals programatically (e.g. what if the text were generated?)
// Could use 'font-variant-caps: all-small-caps' in CSS, but doesn't work in IE, so we use JS
const headerStart = document.getElementById('caps');
headerStart.innerText = headerStart.innerText.toUpperCase();



// Click handler for fetching quote
async function getAdvice(e) {
  e.preventDefault();

  const { id, advice, } = await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip);

  const idSpan = document.getElementById('advice-id');
  const textSpan = document.getElementById('advice-text');

  idSpan.innerText = id;
  textSpan.innerText = advice;
}
const buttonWrapper = document.getElementById('card-button');
buttonWrapper.addEventListener("click", (e) => {
  // Get the actual advice
  getAdvice(e);

  // Advice Slip API only allows hits every 2 seconds, otherwise it just returns the current quote as a cached result; for user experience, show button as disabled
  buttonWrapper.classList.add('--disabled');
  buttonWrapper.title = 'Please wait to fetch next quote';

  // Return button to normal after 2s
  setTimeout(() => {
    buttonWrapper.classList.remove('--disabled')
    buttonWrapper.title = 'Fetch next quote';
  }, 2000);
});



// Window resize handler for changing divider image
function changeDivider() {
  const dividerImg = document.getElementById('divider-img');

  if (window.innerWidth > 500) {
    dividerImg.src = 'images/pattern-divider-desktop.svg';
  }
  else {
    dividerImg.src = 'images/pattern-divider-mobile.svg';
  }
}
window.addEventListener('resize', changeDivider)