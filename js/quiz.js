function validate() {
    let rightCount = 0;
    let allAnswered = true;
    
    for(let i = 0; i < 5; i++) {
        const value = document.querySelector(`input[name="question${i}"]:checked`)?.value;
        if(value == "right") {
            rightCount++;
        }

        if(value == null) {
            allAnswered = false;
        }
    }
    

    if(allAnswered) {
        document.getElementById("result").innerHTML = `Risposte corrette: ${rightCount}/5`;
    } else {
        document.getElementById("result").innerHTML = "Rispondere a tutte le domande";
    }
}
