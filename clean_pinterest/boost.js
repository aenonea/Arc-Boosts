/* --- CLEAN PINTEREST --- */

/**
 * Name: Clean Pinterest
 * Author: æno
 * Description:
 * Source: https://github.com/aenonea/
 */

// -- Slash to Focus Search --

document.addEventListener('keydown', e => {
  const input = document.getElementsByTagName('input')[0];

  if (e.key === '/') {
    input.focus();
  }
});
