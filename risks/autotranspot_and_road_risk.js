// var object = execution.getVariable('object')
// var block = object.prop("entitiesKndKnoData").elements()
// 	.get(0)
// 	.prop("regionalAdditionalData")
// 	.prop("form")
// 	.prop("block")

const AUTOTRANSPORT = "autotransport"
const ROADS = "roads"


// градация рисков для "автотранспорта" и "дорог"
const AUTOTRANSPORT_highRisk = 1
const AUTOTRANSPORT_middleRisk = 2
const AUTOTRANSPORT_lowRisk = 3

const ROADS_highRisk = 1
const ROADS_significantRisk = 2
const ROADS_middleRisk = 3
const ROADS_lowRisk = 4

/** ОБОЗНАЧЕНИЕ ПЕРЕМЕННЫХ
 * globalRisk  - это НЦОi
 * coeff_severity - это коэффициент значитмости показателя тяжести 
 * coeff_probability - это коэффициент значитмости показателя вероятности 
 * coeff_dobrosovestnost - это коэффициент значитмости показателя добросовестности 
 * 
 * risk_severity - 
 * risk_probability - 
 * risk_conscientiousness - 
 * dtpCount - это количество ДТП  (КОi для coeff_severity)
 * regularCart - это количество выданных карт маршрута регулярных перевозок (КОi для coeff_severity)
 * insurance - это наличие добровольного страхования (КОi для coeff_severity)
 */ 

var globalRisk = null
var risk_severity = null
var risk_probability= null
var risk_conscientiousness = null

var coeff_severity = 0.5
var coeff_probability = 0.25
var coeff_conscientiousness = 0.25

var dtpCount = 0 // через селекты юзер выбирает
var regularCart = 0 // через селекты юзер выбирает
var insurance = 0 // через селекты юзер устанавливает


// TESTS DATA
dtpCount = 2
regularCart = 23
insurance = 1

function calculationRiskProbability (c, i) {
    risk_conscientiousness = c * i
    console.log("risk_probability: ", risk_probability)
    return risk_probability
}

function calculationRiskProbability (p, r) {
    risk_probability = p * r
    console.log("risk_probability: ", risk_probability)
    return risk_probability
}

function calculationRiskSeverity (s, d) {
    risk_severity = s * d
    console.log("risk_severity: ", risk_severity)
    return risk_severity
}

function calculationGlobalRisk (s, p, c) {
    const globalRisk = s + p + c
    console.log("globalRisk: ", globalRisk)
    return globalRisk
}

calculationRiskСonscientiousness(coeff_conscientiousness, insurance)
calculationRiskProbability(coeff_probability, regularCart)
calculationRiskSeverity(coeff_severity, dtpCount)
calculationGlobalRisk(risk_severity, risk_probability, risk_conscientiousness)




