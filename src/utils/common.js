function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

// function getArrayObjectValue(array) {
//   const list = [];
//   array.map((item) => {
//     let value = Object.values(item);
//     list.push(value[1]);
//   });

//   return list;
// }

function dateToString(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const formatMoney = (price) => {
  const pieces = parseFloat(price).toFixed(2).split('')
  let ii = pieces.length - 3
  while ((ii-=3) > 0) {
    pieces.splice(ii, 0, '.')
  }
  return  pieces.join('')
}

const formatDate = (date) => {
  var datefo = new Date(date);
  var dd = datefo.getDate();

  var mm = datefo.getMonth() + 1;
  var yyyy = datefo.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  datefo = dd + "-" + mm + "-" + yyyy;
  return datefo;
};


function numberWithCommas(x) {
  console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { 
  // getArrayObjectValue,
  union, not, intersection,dateToString,formatDate, formatMoney,  numberWithCommas
  };
