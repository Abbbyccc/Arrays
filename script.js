const button = document.querySelector('#submit')
const input = document.querySelector('#input')
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~a-zA-z]/;
    return specialChars.test(str)
}

button.addEventListener('click', function () {
    if (containsSpecialChars(input.value) == true) {
        window.alert("Please enter only numbers and commas");
        input.value = ""
    }
    let arr = input.value.split(',')
    let num = arr.map(x => parseInt(x, 10))
    if (document.getElementById('filter').checked) {
        const filtered = num.filter(inp => inp % 2 == 0)
        const filteredOutput = `The numbers are divisible by two : ${filtered}`
        document.getElementById("output").innerHTML = filteredOutput
    } else if (document.getElementById('reduce').checked) {
        const reduced = num.reduce((preValue, curValue) => preValue + curValue, 0)
        const reducedOutput = `The total of the elements of the array is : ${reduced}`
        document.getElementById("output").innerHTML = reducedOutput
    }
})