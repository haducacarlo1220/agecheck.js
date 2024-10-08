function ageCheck() {
    let age = prompt("How old are you?");

    if (age < 13) {
    alert("You are a child.");
    } else if (age >= 13 && age <= 19) {
    alert("You are a teenager.");
    } else {
    alert("You are an adult.");
    }
}