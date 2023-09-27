/** ОБОЗНАЧЕНИЕ ПЕРЕМЕННЫХ
 * globalRisk  - НЦОi
 * coeff_severity - коэффициент значитмости показателя тяжести 
 * coeff_probability - коэффициент значитмости показателя вероятности 
 * coeff_dobrosovestnost - коэффициент значитмости показателя добросовестности 
 * 
 * risk_severity - количество баллов, присуждаемых по критерию "ТЯЖЕСТИ"
 * dtpCount - количество ДТП (переменная для расчёта КОi для coeff_severity)
 * countPoints_severity - значение КОi для coeff_severity
 * 
 * risk_probability - количество баллов, присуждаемых по критерию "ВЕРОЯТНОСТЬ"
 * regularCart - количество выданных карт маршрута регулярных перевозок (переменная для расчёта КОi для coeff_probability)
 * countPoints_probability - значение КОi для coeff_probability
 * 
 * risk_conscientiousness - количество баллов, присуждаемых по критерию "ДОБРОСОВЕСТНОСТЬ"
 * insurance - наличие добровольного страхования (переменная для расчёта КОi для coeff_conscientiousness)
 * countPoints_conscientiousness - значение КОi для coeff_conscientiousness
*/ 

// var object = execution.getVariable('object')
// var block = object.prop("entitiesKndKnoData").elements()
// 	.get(0)
// 	.prop("regionalAdditionalData")
// 	.prop("form")
// 	.prop("block")

// BPMN FOR AUTOTRANSPORT
var AUTOTRANSPORT_risk_category = null
var globalRisk = null
var risk_severity = null
var risk_probability= null
var risk_conscientiousness = null


var countPoints_severity
var countPoints_probability
var countPoints_conscientiousness

var dtpCount = 6 // через селекты юзер выбирает кол-во ДТП
var regularCart = 101 // через селекты юзер выбирает количество карт
var insurance = 1 // через селекты юзер устанавливает

function runAutotransportMainScope () {    
    const coeff_severity = 0.5
    const coeff_probability = 0.25
    const coeff_conscientiousness = 0.25

    const AUTOTRANSPORT_highRisk = 1
    const AUTOTRANSPORT_middleRisk = 2
    const AUTOTRANSPORT_lowRisk = 3

    function assignSeverityPoints(quantity) { \
        if(quantity === 0) return 0
        if(quantity === 1 || quantity === 2) return 25
        if(quantity === 3 || quantity === 4) return 50
        if(quantity === 5 || quantity === 6) return 75
        if(quantity > 6) return 100 
    }

    function assignProbabilityPoints(quantity) {
        if(quantity < 11) return  0
        if(quantity > 10 && quantity < 51) return 25
        if(quantity > 50 && quantity < 101) return 50
        if(quantity > 100 && quantity < 151) return 75
        if(quantity > 150) return 100
    }

    function assignConscientiousnessPoints(quantity) {
        if(quantity === 0) return 0 // наличие страховки
        if(quantity === 1) return 100 // отсутствие страховки
    }

    function calculationSeverityRisk (s, cs) { return risk_severity = s * cs }
    function calculationProbabilityRisk (p, r) { return risk_probability = p * r }
    function calculationConscientiousnessRisk (c, i) { return risk_conscientiousness = c * i }

    function calculationGlobalRisk (s, p, c) {
        const globalRisk = s + p + c 
        if(globalRisk > 75)  return AUTOTRANSPORT_highRisk
        if(globalRisk  > 45 && globalRisk <= 75 ) return AUTOTRANSPORT_middleRisk
        if(globalRisk  < 45  ) return AUTOTRANSPORT_lowRisk
    }
    
    countPoints_severity = assignSeverityPoints(dtpCount)
    countPoints_probability = assignProbabilityPoints(regularCart)
    countPoints_conscientiousness = assignConscientiousnessPoints(insurance)
    
    calculationSeverityRisk(coeff_severity, countPoints_severity)
    calculationProbabilityRisk(coeff_probability, countPoints_probability)
    calculationConscientiousnessRisk(coeff_conscientiousness, countPoints_conscientiousness)

    AUTOTRANSPORT_risk_category = calculationGlobalRisk(risk_severity, risk_probability, risk_conscientiousness)
}

runAutotransportMainScope()

// градация рисков для "дорог"
const ROADS_highRisk = 1
const ROADS_significantRisk = 2
const ROADS_middleRisk = 3
const ROADS_lowRisk = 4

const ROADS = "roads"
var ROADS_risk_category = null




