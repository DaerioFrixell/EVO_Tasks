
// var object = execution.getVariable('object')
// var block = object.prop("entitiesKndKnoData").elements()
// 	.get(0)
// 	.prop("regionalAdditionalData")
// 	.prop("form")
// 	.prop("block")

var ROADS_risk_category = null

const ROADS_highRisk = 1
const ROADS_significantRisk = 2
const ROADS_middleRisk = 3
const ROADS_lowRisk = 4

var groupSeverity = "B" // выбирает юзер через селект A, B
var groupProbability= 4 // выбирает юзер через селект 1, 2, 3, 4

function calculationGlobalRisk (s, p) { 
    console.log("Severity: ", s)
    console.log("Probability: ", p)
    if ((s === "A" || s === "B") && p === 1) return ROADS_highRisk
    if ((s === "A" || s === "B") && p === 2) return ROADS_significantRisk
    if ((s === "A" && p > 2) || (s === "B" && p === 3)) return ROADS_middleRisk
    if (s === "B" && p === 4) return ROADS_lowRisk
}

ROADS_risk_category = calculationGlobalRisk(groupSeverity, groupProbability)
console.log("ROADS_risk_category: ", ROADS_risk_category)


