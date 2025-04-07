function processAddress(){
    if (address.value == ''){
        alert('This require an input')
    }else{
        var Letter = ( address.value).toLowerCase()
        newAddress.innerHTML = Letter
    
        
    }
 }
function capitalDect(){
    var input = (BookName.value)
    var words = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    var capitalsentence = words.join(' ')
    if(input === ''){
        alert("Enter a book or document title ")
        Result.innerHTML =  ('your search result shows here')

    } else if( input == capitalsentence){
        Result.innerHTML =  ('This book is Original')
    }else {
        Result.innerHTML =  (' The Title of the book/document you enter is Dublicate/Incorrecct (Capitalise your title)') 
    }
    
}
function ReduceS(){
    var input = Essay.value
    answer.innerHTML = input.replace(/\s+/g, ' ')

}
function passwordLenght(){
    var Input = password.value
   
    if( !/[A-Z]/.test(Input)){
        passwordStatus.innerHTML = ("Add an Uppercase letter")
    }else if ( !/[a-z]/.test(Input)){ 
        passwordStatus.innerHTML = ("Add  Lowercase letter") 
    }else if (!/\d/.test(Input)){
        passwordStatus.innerHTML = ("Add  Number to your password")
    }else if(Input =! Input.lenght>8){
        passwordStatus.innerHTML = ("your password should be at least 8 char")
    }else{
        passwordStatus.innerHTML = ('password accept')
    }

}
function discount(){
    input = Number(Cart.value)
    if(input%2 == 0){
        outcome.innerHTML = ('15% discount on the goods bought ')
    }
    else{
        outcome.innerHTML = ('No discount')
    }
} 
function TemperatureRange(){
    var Input = TemperatureInput.value
    if(Input <= Number(19) ){
        TempOutput.innerHTML = 'Weather is cold'
    }else if( Input >= Number(20 )&& Input < Number(28)){
         TempOutput.innerHTML = 'Weather is Warm'
    }else{
         TempOutput.innerHTML = 'Weather is Hot'
    }

}
function QuestionAnswer(){
    var input = answer.value
    var Capitalize = input.split(' ').map(word =>  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    var Capitalized = Capitalize.join(' ')
    var Lowercase = input.toLowerCase()
    if (input == Capitalized || input == Lowercase ){
        AnsDisplay.innerHTML = ('correct')
    }else{
        AnsDisplay.innerHTML = ('Not correct')
    }
}  
function BMI(){
    var Input1 = Weight.value
    var Input2 = Height.value
    Result1.innerHTML = (Input1 + 'kg') 
    Result2.innerHTML = (Input2 + 'cm') 
    if (Input1 <= Number(18) ){
        Result3.innerHTML = ('Patience is Underweight')
    }else  if (Input1 >= Number(25) && Input1 <= Number(29) ){
        Result3.innerHTML = ('Patience is Overweight')
    }else{
        Result3.innerHTML = ('Patience Weight is Obese')
    }  

} 
function CorrectUsername(){
    var input = Username.value
    if (/^[a-zA-Z0-9_]+$/.test(input)){
        UserResult.innerHTML = ('Accept')  
    }
    else{
        UserResult.innerHTML = ('Symbols are not accepted except Underscore ') 
    }
}


// What   are the   key f actors that   contribute   to a successful team, and how can they be applied in a real-world setting?
// var text ="                my  name is   oke      isaiah  "
// var Text = text.replace(/\s+/g, ' ')
// console.log(Text);

