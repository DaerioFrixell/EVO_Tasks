const input = document.createElement("input")

document.body.append(input)
input.placeholder = "some text"
input.pattern = [/[0-3]/, /d/, ".", /[0-1]/, /d/, ".", /[1-2]/, /[0,9]/, /d/, /d/]

const regMask = "00.00.1000"

const changer = (mask) => {
	let qwe = mask
	console.log("qwe: ", qwe)
	if (qwe[0] === "0" && qwe[1] === "0") {
		qwe = [0] + "1" + qwe.slice(2)
		return qwe
	}
	return qwe
}

// типизировать на строки
input.addEventListener("input", function (e) {
	const regexp = /([0-3] | 0[1-9])/
	let { value } = e.target
	// const a = regexp.test(value)

	if ((value[0] === "0" && value[1] === "0") || (value[0] === "3" && Number(value[1]) > 1)) {
		input.value = value[0] + "1" + value.slice(2)
	}
	if (value[3] === "0" && value[4] === "0") input.value = value.slice(0, 4) + "1" + value.slice(5)
	if (value[3] === "1" && Number(value[4]) > 2) input.value = value.slice(0, 4) + "2" + value.slice(5)
	if (value[6] === "0") input.value = value.slice(0, 6) + "1"
	if (value[6] === "1" && Number(value[7]) < 9) input.value = value.slice(0, 7) + "9"

	if (value[6] === "1" && value[7] === "9" && Number(value[8]) < 6) input.value = value.slice(0, 8) + "6"

	/**
	 * если больше 29 числа и год какой-то там
	 */
	const visYear = Number(value[6] + value[7] + value[8] + value[9])
	if (
		((value[0] === "2" && value[1] === "9") || (value[0] === "3" && Number(value[1]) < 2)) &&
		value[3] === "0" &&
		value[4] === "2" &&
		(visYear % 400 === 0 || visYear % 4 === 0 || visYear % 100 === 0)
	) {
		input.value = "29" + value.slice(2)
	}

	if (
		((value[0] === "2" && value[1] === "9") || (value[0] === "3" && Number(value[1]) < 2)) &&
		value[3] === "0" &&
		value[4] === "2" &&
		!visYear
	) {
		input.value = "28" + value.slice(2)
	}
})

/** КОД ИЗ ПРОЕКТА
 * form.date = input.value
 * date = string in class method
 */
if ((date[0] === "0" && date[1] === "0") || (date[0] === "3" && Number(date[1]) > 1)) {
	this.formatDate = date[0] + "1" + date.slice(2)
}

if (date[3] + date[4] === "00") this.formatDate = date.slice(0, 3) + "01" + date.slice(5)
if (Number(date[3] + date[4]) > 12) this.formatDate = date.slice(0, 3) + "12" + date.slice(5)

if (date[6] === "0") this.formatDate = date.slice(0, 6) + "1"
if (date[6] === "1" && Number(date[7]) < 9) this.formatDate = date.slice(0, 7) + "9"
if (date[6] + date[7] === "19" && Number(date[8]) < 6) this.formatDate = date.slice(0, 8) + "6"

//проверка февраля на високосный/невисокосный год
const leapYear = Number(date[6] + date[7] + date[8] + date[9])
if (!Number.isNaN(leapYear)) {
	if (
		Number(date[0] + date[1]) > 29 &&
		date[3] + date[4] === "02" &&
		(leapYear % 400 === 0 || leapYear % 4 === 0 || leapYear % 100 === 0)
	) {
		this.formatDate = "29" + date.slice(2)
	} else {
		this.formatDate = "28" + date.slice(2)
	}
}
