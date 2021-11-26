/* eslint-disable no-undef */
setInterval(() => {
  const dt = luxon.DateTime.now();
  const time = document.querySelector('.time-div');
  time.textContent = dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
}, 1);
