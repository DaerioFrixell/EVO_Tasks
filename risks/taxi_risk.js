const object = execution.getVariable('object');
var block = object.prop("entitiesKndKnoData").elements()
	.get(0)
	.prop("regionalAdditionalData")
	.prop("form")
	.prop("block");

let riskCategory

let m1 = 1 // дтп со смертью из-за тяжкого/среднего вреда
let m2 = 0 // дтп без смерти, но тяжкий/средний вред
const highCategory = 1
const middleCategory = 2
const lowCategory = 3

function riskCalculation(m1, m2) {
  const Rt = 20 * m1 + 5 * m2 // показатель риска

  if (Rt >= 15) {
    return (riskCategory = highCategory)
  }

  if (Rt >= 7 && Rt <= 14) {
    return (riskCategory = middleCategory)
  }

  if (Rt <= 6) {
    return (riskCategory = lowCategory)
  }
}

// check
const check = ""


riskCategory = riskCalculation(m1, m2)
execution.setVariable("riskCategory", riskCategory);