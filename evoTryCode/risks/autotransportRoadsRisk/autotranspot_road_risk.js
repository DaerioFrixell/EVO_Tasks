var object = execution.getVariable("object")
var block = object
	.prop("entitiesKndKnoData")
	.elements()
	.get(0)
	.prop("regionalAdditionalData")
	.prop("form")
	.prop("block")

var AUTOTRANSPORT_risk_category;
var ROADS_risk_category;
var globalRisk;
var riskCategory;

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

var chooseRisk;

try {
	chooseRisk = block.prop("chooseRisk").value()
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

// количество баллов для severity
if (dtpCount === 0) countPoints_severity = 0
if (dtpCount === 1 || dtpCount === 2) countPoints_severity = 25
if (dtpCount === 3 || dtpCount === 4) countPoints_severity = 50
if (dtpCount === 5 || dtpCount === 6) countPoints_severity = 75
if (dtpCount > 6) countPoints_severity = 100

// количество баллов для probability
if (regularCart < 11) countPoints_probability = 0
if (regularCart > 10 && regularCart < 51) countPoints_probability = 25
if (regularCart > 50 && regularCart < 101) countPoints_probability = 50
if (regularCart > 100 && regularCart < 151) countPoints_probability = 75
if (regularCart > 150) countPoints_probability = 100

// количество баллов для conscientiousness
if (insurance === '0') countPoints_conscientiousness = 0
if (insurance === '1') countPoints_conscientiousness = 100

var coeff_severity = 0.5
var coeff_probability = 0.25
var coeff_conscientiousness = 0.25

function calculationSeverityRisk(s, cs) {
	risk_severity = s * cs
}

function calculationProbabilityRisk(p, r) {
	risk_probability = p * r
}

function calculationConscientiousnessRisk(c, i) {
	risk_conscientiousness = c * i
}

calculationSeverityRisk(coeff_severity, countPoints_severity)
calculationProbabilityRisk(coeff_probability, countPoints_probability)
calculationConscientiousnessRisk(coeff_conscientiousness, countPoints_conscientiousness)

//присвоение риска в middleware
var highRisk = 1
var significantRisk = 2
var middleRisk = 3
var lowRisk = 4

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
if (
	(groupSeverity === "A" && (groupProbability === "3" || groupProbability === "4")) 
	|| (groupSeverity === "B" && groupProbability === "3")
	) {
	ROADS_risk_category = middleRisk
}

if (groupSeverity === "B" && groupProbability === "4") {
	ROADS_risk_category = lowRisk
}

// присвоение риска для выбранного расчёта риска в переменную для DMN
if (chooseRisk === "1") {
	riskCategory = AUTOTRANSPORT_risk_category
  execution.setVariable("riskCategory", riskCategory)
}

if (chooseRisk === "0") {
	riskCategory = ROADS_risk_category	
  execution.setVariable("riskCategory", riskCategory)
}