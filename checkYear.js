const input = document.createElement("input")

document.body.append(input)
input.placeholder = "some text"

// типизировать на строки
input.addEventListener("input", function (e) {
if(e?.target?.value) {	
		let value = e.target.value
		if ((value[0] === "0" && value[1] === "0") || (value[0] === "3" && Number(value[1]) > 1)) {
			input.value = value[0] + "1"
		} 
		if (value[3] + value[4] === "00")  input.value = value.slice(0, 3) + "01"
		if (Number(value[3] + value[4]) > 12) input.value = value.slice(0, 3) + "12"
		if (value[6] === "0") input.value = value.slice(0, 6) + "1"
		if (value[6] === "1" && Number(value[7]) < 9) input.value = value.slice(0, 7) + "9"
		if (value[6] + value[7] === "19" && Number(value[8]) < 6) input.value = value.slice(0, 8) + "6"

		//проверка февраля на висосоный/невисокосный год
		const leapYear = Number(value[6] + value[7] + value[8] + value[9])
		if (!Number.isNaN(leapYear)) {
			if (
				Number(value[0] + value[1]) > 29 &&
				value[3] + value[4] === "02" &&
				(leapYear % 400 === 0 || leapYear % 4 === 0 || leapYear % 100 === 0)
			) {
				input.value = "29" + value.slice(2)
			} else {
				input.value= "28" + value.slice(2)
			}
	}
	}
})