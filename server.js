//
const express = require ("express")
const app = express()
const port = 5000

app.get('/', (req, res) => {
      return res.send('Welcome to ACP server Rahul Pawan working properly')
      
}) 

app.listen(port, (error, result) => {
    if (error) { 
       console.log('server error', error)
    }
    console.log(`server is listening on ${port}`)
})

const wardCodes = {
    generalWard: "W-GW",
    ICCU: "W-ICCU",

}
const hospitalDetails = {
    hospitalName: "global hospital",
 facilities:{ 
        
covid : [
    {
        wardCode:wardCodes.generalWard,
        wardName: "general ward",
        numbersOfBed: 163,
        bedCharge: 80,
        unitOfbedCharge: "rs/day",
        dietCharge: 40,
        unitOfdietCharge: "rs/day",
        advance: "No charges are levied for outpatient",
        numsOfdoc: 14,
        numOfnurses: 25,
    },
]
 }
}