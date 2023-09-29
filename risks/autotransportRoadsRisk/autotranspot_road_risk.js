var object = execution.getVariable("object")
var block = object
	.prop("entitiesKndKnoData")
	.elements()
	.get(0)
	.prop("regionalAdditionalData")
	.prop("form")
	.prop("block")

var AUTOTRANSPORT_risk_category = null
var ROADS_risk_category = null
var globalRisk = null
var riskCategory = null

var highRisk = 1
var significantRisk = 2
var middleRisk = 3
var lowRisk = 4

var coeff_severity = 0.5
var coeff_probability = 0.25
var coeff_conscientiousness = 0.25

var risk_severity = null
var risk_probability = null
var risk_conscientiousness = null

var countPoints_severity = null
var countPoints_probability = null
var countPoints_conscientiousness = null

var dtpCount = 0
var regularCart = 0
var insurance = 0
var groupSeverity = ""
var groupProbability = ""

// checkboxes
var transportRisk = false
var roadsRisk = false

try {
	transportRisk = block.prop("transportRisk").value()
} catch (error) {}

try {
	transportRisk = block.prop("transportRisk").value()
} catch (error) {}
try {
	roadsRisk = block.prop("roadsRisk").value()
} catch (error) {}
try {
	dtpCount = block.prop("dtpCount").value()
} catch (error) {}
try {
	regularCart = block.prop("regularCart").value()
} catch (error) {}
try {
	insurance = block.prop("insurance").value()
} catch (error) {}
try {
	groupSeverity = block.prop("groupSeverity").value()
} catch (error) {}
try {
	groupProbability = block.prop("groupProbability").value()
} catch (error) {}

// расчёт рисков - ТРАНСПОРТ
// count balls for severity
if (dtpCount === 0) countPoints_severity = 0
if (dtpCount === 1 || dtpCount === 2) countPoints_severity = 25
if (dtpCount === 3 || dtpCount === 4) countPoints_severity = 50
if (dtpCount === 5 || dtpCount === 6) countPoints_severity = 75
if (dtpCount > 6) countPoints_severity = 100

// count balls for probability
if (regularCart < 11) countPoints_probability = 0
if (regularCart > 10 && regularCart < 51) countPoints_probability = 25
if (regularCart > 50 && regularCart < 101) countPoints_probability = 50
if (regularCart > 100 && regularCart < 151) countPoints_probability = 75
if (regularCart > 150) countPoints_probability = 100

// count balls for conscientiousness
if (insurance === 0) countPoints_conscientiousness = 0
if (insurance === 1) countPoints_conscientiousness = 100

function calculationSeverityRisk(s, cs) {
	return (risk_severity = s * cs)
}
calculationSeverityRisk(coeff_severity, countPoints_severity)

function calculationProbabilityRisk(p, r) {
	return (risk_probability = p * r)
}
calculationProbabilityRisk(coeff_probability, countPoints_probability)

function calculationConscientiousnessRisk(c, i) {
	return (risk_conscientiousness = c * i)
}
calculationConscientiousnessRisk(coeff_conscientiousness, countPoints_conscientiousness)

var globalRisk = risk_severity + risk_probability + risk_conscientiousness
if (globalRisk > 75) AUTOTRANSPORT_risk_category = highRisk
if (globalRisk > 49 && globalRisk <= 75) AUTOTRANSPORT_risk_category = middleRisk
if (globalRisk < 50) AUTOTRANSPORT_risk_category = lowRisk

// расчёт рисков - ДОРОГИ
if ((groupSeverity === "A" || groupSeverity === "B") && groupProbability === "1") {
	ROADS_risk_category = highRisk
}
if ((groupSeverity === "A" || groupSeverity === "B") && groupProbability === "2") {
	ROADS_risk_category = significantRisk
}
if ((groupSeverity === "A" && groupProbability === "2") || (groupSeverity === "B" && groupProbability === "3")) {
	ROADS_risk_category = middleRisk
}

if ((groupSeverity === "A" && groupProbability === "3") || (groupSeverity === "B" && groupProbability === "3")) {
	ROADS_risk_category = middleRisk
}

if (groupSeverity === "B" && groupProbability === "4") {
	ROADS_risk_category = lowRisk
}

// управление чекбоксами
if (!transportRisk && !roadsRisk) {
	roadsRisk = true
}

if (transportRisk) {
	roadsRisk = false
	execution.setVariable("riskCategory", AUTOTRANSPORT_risk_category)
}

if (roadsRisk) {
	execution.setVariable("riskCategory", ROADS_risk_category)
}
