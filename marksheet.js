function time() {
    let time = new Date()
    let onlytime = time.toLocaleTimeString()
    document.getElementById("time").innerHTML = onlytime
}
setInterval(time, 1000)
function markSheet() {
    let eng = +document.getElementById("eng").value
    let urdu = +document.getElementById("urdu").value
    let math = +document.getElementById("math").value

    let TotalMarks = 300
    document.getElementById("total").innerHTML = TotalMarks
    let obt = document.getElementById("obt").innerHTML = eng + urdu + math

    let per = document.getElementById("per").innerHTML = obt / TotalMarks * 100

    // Wednesday 15-March-23 Start //

    if(eng>=100 || urdu>=100 || math>=100){
        alert("Out Of Range Maximum Marks is 100")
        window.location.reload()
}
    
    else{
   

if (per > 89.9 && per < 99.9) {
    document.getElementById("grade").innerHTML = "A++"
}

else if (per > 80 && per < 89.9) {
    document.getElementById("grade").innerHTML = "A+"
}

else if (per > 70 && per < 79.9) {
    document.getElementById("grade").innerHTML = "A"
}

else if (per > 60 && per < 69.9) {
    document.getElementById("grade").innerHTML = "B"
}

else if (per > 50 && per < 59.9) {
    document.getElementById("grade").innerHTML = "C"
}

else if (per >=40 && per < 49.9) {
    document.getElementById("grade").innerHTML = "D"
}

else {
    document.getElementById("grade").innerHTML = "Fail"
}

}

}
                         // Monday 15-March-23 END //
function refresh() {
    alert("are you sure reload this page????")
    window.location.reload()
}

let data = {
    mUsername : username,
    mEnglish  : eng,
    mUrdu : urdu,
    mMath : math,
    mObtained : obt,
    mPercentage : per,
}
console.log(data);