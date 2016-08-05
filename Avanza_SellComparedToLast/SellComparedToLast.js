Array.prototype.slice.call(
  document.querySelectorAll('.tablesorter .clientSortedRow')
).forEach(row => {
  const sellPrice = row.querySelector('.sellPrice');
  const lastPrice = row.querySelector('.lastPrice');

  try {
    const sell = parseFloat(sellPrice.innerHTML.replace(',', '.'), 10);
    const last = parseFloat(lastPrice.children[0].innerHTML.replace(',', '.'), 10);

    if (sell < last) {
      sellPrice.classList.add('negative');
    } else if (sell > last) {
      sellPrice.classList.add('positive');
    }
    console.log('Parsed ', lastPrice, sellPrice, row, last, sell);
  } catch (error) {
    console.log('could not parse ', row, error);
  }
});
