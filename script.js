
function calculate(){
    let date = document.getElementById("date").value
    var result = document.getElementById("result")
    const birth_date = new Date(date)
    const today = new Date()
    
    
    let ty = today.getFullYear()
    let tm = today.getMonth()
    let td = today.getDate()
    let by = birth_date.getFullYear()
    let bm = birth_date.getMonth()
    let bd = birth_date.getDate()
    let Dates,Months,years
    Dates = (td - bd)
    Months = (tm - bm)
    years = (ty - by)
    

    if(years = 0){
        result.innerHTML = "please enter valid date";
    }

    if (Dates < 0 ) {
        let ndays =  new Date(ty,(tm-1),0).getDate()
        Dates = (ndays+td) - bd
        tm = tm - 1
    }    
    if (Months < 0){
            Months = (tm + 12) - (bm)
            years = (ty - 1) - (by)   
        }
    result.innerHTML = `${years} Years ${Months} Months ${Dates}days`
}


