var object = execution.getVariable("object")
var block = object
	.prop("entitiesKndKnoData")
	.elements()
	.get(0)
	.prop("regionalAdditionalData")
	.prop("form")
	.prop("block")

var riskCategory
var highCategory = 1
var middleCategory = 2
var lowCategory = 3

var M1 = 0
var M2 = 4

var N1 = 2
var Z1 = 0
var N2 = 2

var P1 = ""
var P2 = ""
var P3 = ""
var P4 = ""
var P5 = ""
var P6 = ""
var P7 = ""
var P8 = ""
var P9 = ""

try {
	M1 = block.prop("M1").value()
} catch (error) {}
try {
	M2 = block.prop("M2").value()
} catch (error) {}

try {
	N1 = block.prop("N1").value()
} catch (error) {}
try {
	Z1 = block.prop("Z1").value()
} catch (error) {}
try {
	N2 = block.prop("N2").value()
} catch (error) {}

try {
	P1 = block.prop("P1").value()
} catch (error) {}
try {
	P2 = block.prop("P2").value()
} catch (error) {}
try {
	P3 = block.prop("P3").value()
} catch (error) {}
try {
	P4 = block.prop("P4").value()
} catch (error) {}
try {
	P5 = block.prop("P5").value()
} catch (error) {}
try {
	P6 = block.prop("P6").value()
} catch (error) {}
try {
	P7 = block.prop("P7").value()
} catch (error) {}
try {
	P8 = block.prop("P8").value()
} catch (error) {}
try {
	P9 = block.prop("P9").value()
} catch (error) {}

var k = N1 / Z1 // проверка деления на 0, норм формулы присылают :D
if (Z1 === 0) k = 0

var Rt = 20 * M1 + 5 * M2
var Rv = 200 * k + 5 * N2
var Rd = 4 * (9 - +P1 - +P2 - +P3 - +P4 - +P5 - +P6 - +P7 - +P8 - +P9)

var biggestValue = Math.max(Rt, Rv, Rd)

if (biggestValue >= 15) riskCategory = highCategory
if (biggestValue >= 7 && Rt <= 14) riskCategory = middleCategory
if (biggestValue <= 6) riskCategory = lowCategory

// execution.setVariable("riskCategory", riskCategory)
