// var object = execution.getVariable('object')
// var block = object.prop("entitiesKndKnoData").elements()
// 	.get(0)
// 	.prop("regionalAdditionalData")
// 	.prop("form")
// 	.prop("block")

//checkboxes
var transportRisk = false
var roadsRisk = false

var AUTOTRANSPORT_risk_category = null
var ROADS_risk_category = null

var globalRisk = null
var risk_severity = null
var risk_probability= null
var risk_conscientiousness = null

var countPoints_severity
var countPoints_probability
var countPoints_conscientiousness

var dtpCount = 6
var regularCart = 101
var insurance = 1

var groupSeverity = "B" // выбирает юзер через селект A, B
var groupProbability= 4 // выбирает юзер через селект 1, 2, 3, 4

function runAutotransportMainScope () {    
    const coeff_severity = 0.5
    const coeff_probability = 0.25
    const coeff_conscientiousness = 0.25

    const AUTOTRANSPORT_highRisk = 1
    const AUTOTRANSPORT_middleRisk = 2
    const AUTOTRANSPORT_lowRisk = 3

    function assignSeverityPoints(quantity) { 
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
        if(quantity === 0) return 0
        if(quantity === 1) return 100
    }

    function calculationSeverityRisk (s, cs) { return risk_severity = s * cs }
    function calculationProbabilityRisk (p, r) { return risk_probability = p * r }
    function calculationConscientiousnessRisk (c, i) { return risk_conscientiousness = c * i }

    function calculationGlobalRisk (s, p, c) {
        const globalRisk = s + p + c 
        if(globalRisk > 75)  return AUTOTRANSPORT_highRisk
        if(globalRisk  > 49 && globalRisk <= 75 ) return AUTOTRANSPORT_middleRisk
        if(globalRisk  < 50  ) return AUTOTRANSPORT_lowRisk
    }
    
    countPoints_severity = assignSeverityPoints(dtpCount)
    countPoints_probability = assignProbabilityPoints(regularCart)
    countPoints_conscientiousness = assignConscientiousnessPoints(insurance)
    
    calculationSeverityRisk(coeff_severity, countPoints_severity)
    calculationProbabilityRisk(coeff_probability, countPoints_probability)
    calculationConscientiousnessRisk(coeff_conscientiousness, countPoints_conscientiousness)

    AUTOTRANSPORT_risk_category = calculationGlobalRisk(risk_severity, risk_probability, risk_conscientiousness)
}

function runRoadMainScope() {
    function calculationGlobalRisk (s, p) { 
        const ROADS_highRisk = 1
        const ROADS_significantRisk = 2
        const ROADS_middleRisk = 3
        const ROADS_lowRisk = 4
    
        if ((s === "A" || s === "B") && p === 1) return ROADS_highRisk
        if ((s === "A" || s === "B") && p === 2) return ROADS_significantRisk
        if ((s === "A" && p > 2) || (s === "B" && p === 3)) return ROADS_middleRisk
        if (s === "B" && p === 4) return ROADS_lowRisk
    }
}


ROADS_risk_category = calculationGlobalRisk(groupSeverity, groupProbability)

runRoadMainScope()
runAutotransportMainScope()