// SportingBet https://www.sportingbet.com/sports-specials/game-of-thrones-the-last-person-to-sit-on-the-iron-throne/1--1-1442385.html
copy([...document.querySelectorAll('.m_event')].map(item => ({
  name: item.querySelector('.description').textContent,
  odds: item.querySelector('.priceText.UK').textContent
})));


// Sky Bet https://www.skybet.com/tv-and-film-specials/game-of-thrones
copy([...document.querySelectorAll('.oc-desc')].map(item => ({
name: item.textContent,
odds: item.parentNode.querySelector('.odds').textContent,
})));

// Ladbrokes https://sports.ladbrokes.com/en-gb/betting/tv-specials/specials/other-specials/game-of-thrones/225408856/
copy([...document.querySelectorAll('.selection')].map(item => ({
  name: item.querySelector('.selection-name').textContent,
  odds: item.querySelector('.odds-convert').textContent
})));