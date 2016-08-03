var rows = document.querySelectorAll('.tablesorter .clientSortedRow');
for (var i = 0; i < rows.length; i++) {
  var sellPrice = rows[i].querySelector('.sellPrice');
  var lastPrice = rows[i].querySelector('.lastPrice');

  var negativeClass = 'negative';
  var positiveClass = 'positive';
  
  try {
    var sell = parseFloat(sellPrice.innerHTML.replace(',', '.'), 10);
    var last = parseFloat(lastPrice.children[0].innerHTML.replace(',', '.'), 10);

    if (sell < last) sellPrice.classList.add(negativeClass);
    else if (sell > last) sellPrice.classList.add(positiveClass);
    console.log('Parsed ', lastPrice, sellPrice, rows[i], last, sell);
  } catch (error) {
    console.log('could not parse ', rows[i], error);
  }
}