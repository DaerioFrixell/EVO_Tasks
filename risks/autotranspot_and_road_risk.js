import { regularCartTest } from "./testData.js";

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

var dtpCount = 0 // через селекты юзер выбирает кол-во ДТП, по ним будет присваиваться БАЛЛ
var regularCart = 0 // через селекты юзер выбирает (the same)
var insurance = 0 // через селекты юзер устанавливает

// TESTS DATA
dtpCount = 1
regularCart = 51
insurance = 100 // countPoints_conscientiousness не считается


function runMainScope () {    
    const coeff_severity = 0.5
    const coeff_probability = 0.25
    const coeff_conscientiousness = 0.25

    const AUTOTRANSPORT_highRisk = 1
    const AUTOTRANSPORT_middleRisk = 2
    const AUTOTRANSPORT_lowRisk = 3

    function assignSeverityPoints(quantity) {
        if(quantity === 0) {
            countPoints_severity = 0 
        }

        if(quantity === 1 || quantity === 2) {
            countPoints_severity = 25 
        }

        if(quantity === 3 || quantity === 4) {
            countPoints_severity = 50
        }

        if(quantity === 5 || quantity === 6) {
            countPoints_severity = 75 
        }

        if(quantity < 6) {
            countPoints_severity = 100 
        }
    }

    function assignProbabilityPoints(quantity) { 
        console.log("quantity in assign Probability Points: ", quantity)
        if(quantity < 11) {
            return  0 
        }

        if(quantity > 10 && quantity < 51) {
            return 25 
        }

        if(quantity > 50 && quantity < 101) {
            return 50
        }

        if(quantity > 100 && quantity < 151) {
            return 75 
        }

        if(quantity > 150) {
            return 100 
        }
    }
    
   

    function calculationSeverityRisk (s, cs) {
        risk_severity = s * cs
        // console.log("risk_severity: ", risk_severity)
        return risk_severity
    }

    function calculationProbabilityRisk (p, r) {
        risk_probability = p * r
        console.log("risk_probability: ", risk_probability)
        return risk_probability
    }

    function calculationConscientiousnessRisk (c, i) {
        risk_conscientiousness = c * i
        // console.log("risk_conscientiousness: ", risk_conscientiousness)
        return risk_conscientiousness
    }

    function calculationGlobalRisk (s, p, c) {
        const globalRisk = s + p + c
        // console.log("globalRisk: ", globalRisk)
    
        if(globalRisk > 75) { 
            // console.log("AUTOTRANSPORT_risk_category - high:",  AUTOTRANSPORT_highRisk)
            return AUTOTRANSPORT_highRisk
        }
        if(globalRisk  > 45 && globalRisk <= 75 ) {
            // console.log("AUTOTRANSPORT_risk_category - middle:",  AUTOTRANSPORT_middleRisk)
            return AUTOTRANSPORT_middleRisk
        }
        if(globalRisk  < 45  ) {
            // console.log("AUTOTRANSPORT_risk_category - low:",  AUTOTRANSPORT_lowRisk)
            return AUTOTRANSPORT_lowRisk
        }
    }
    
    assignSeverityPoints(dtpCount)
    countPoints_probability = assignProbabilityPoints(regularCartTest)    
    console.log("countPoints_probability", countPoints_probability)
    
    calculationSeverityRisk(coeff_severity, countPoints_severity)
    calculationProbabilityRisk(coeff_probability, countPoints_probability)
    calculationConscientiousnessRisk(coeff_conscientiousness, insurance)
    AUTOTRANSPORT_risk_category = calculationGlobalRisk(risk_severity, risk_probability, risk_conscientiousness)
}

runMainScope()

// градация рисков для "дорог"
const ROADS_highRisk = 1
const ROADS_significantRisk = 2
const ROADS_middleRisk = 3
const ROADS_lowRisk = 4

const ROADS = "roads"
var ROADS_risk_category = null




