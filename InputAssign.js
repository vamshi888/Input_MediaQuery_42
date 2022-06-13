const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent="Name is Incorrect"
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
    output.textContent - salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
});

function submitForm() {
    let name = document.getElementById("text").value; 
    let password = document.getElementById("pwd").value;
    let email = document.getElementById("email").value;
    let web = document.getElementById("url").value;
    let number = document.getElementById("number").value;
    let tel = document.getElementById("tel").value;
    let search = document.getElementById("search").value;
    let party = document.getElementById("party").value;
    let salary = document.getElementById("salary").value;
    
    const person = {
        name: name, password: password, email: email, web: web, number: number,  tel: tel, party: party, salary: salary
    }
    document.write(JSON.stringify(person))
}