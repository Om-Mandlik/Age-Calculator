
function calculate(){
    let date = document.getElementById("date").value
    var result = document.getElementById("result")
    const birth_date = new Date(date)
    const today = new Date()
    console.log(birth_date,today)
    let age
    age = today - birth_date 
    console.log(age)

    
   

}

