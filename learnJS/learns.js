const elem = "qwe";


const changeElem = !elem
console.log(changeElem);

const input = document.createElement("input")
input.type = "date"
input.addEventListener('change', (e) => {
  const date = e.target.value

  const date2 = new Date()
  const date2Method = date2.getTimezoneOffset()

  console.log({
    type: typeof (date),
    val: date,
    date2: date2Method,
    type2: typeof (date2),
    typeOfMethod: typeof (date2Method),
  })
})

document.body.appendChild(input)