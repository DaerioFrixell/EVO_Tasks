var object = execution.getVariable('object')
var block = object.prop("entitiesKndKnoData").elements()
	.get(0)
	.prop("regionalAdditionalData")
	.prop("form")
	.prop("block")

var highCategory = 1
var middleCategory = 2
var lowCategory = 3

var riskCategory
var M1 // дтп со смертью из-за тяжкого/среднего вреда
var M2 // дтп без смерти, но тяжкий/средний вред

try {
  M1 = block.prop("M1").value()
} catch(error) {}
try {
  M2 = block.prop("M2").value()
} catch(error) {}

function riskCalculation(M1, M2) {
  var Rt = 20 * M1 + 5 * M2 // показатель риска

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

riskCategory = riskCalculation(M1, M2)
execution.setVariable("riskCategory", riskCategory);