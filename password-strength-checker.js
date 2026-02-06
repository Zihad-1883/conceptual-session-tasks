// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8

// Must contain at least 1 number

// Must contain at least 1 uppercase letter

// Must not contain spaces


// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }

// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }



let password = "helloWorld";
let password2 = "Hello123"


function checkPassword(password){

    let reasons = [];
    let valid = true;
    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpace = false;

    for(let i=0; i<password.length; i++){
        let character = password[i];
        
        if(character >= '0' && character <= '9'){
            hasNumber = true;
        }
        else if(character >= 'A' && character <= 'Z'){
            hasUpperCase = true;
        }

        else if(character === ' '){
            hasSpace  = true;
        }
    }

    if(password.length < 8){
        valid = false;
        reasons.push('password must at least be 8 characters');
    }

    else if(hasNumber === false){
        valid = false;
        reasons.push('missing number');
    }

    else if(hasUpperCase === false){
        valid = false;
        reasons.push('password must contain an upper case');
    }

    else if(hasSpace === true){
        valid = false;
        reasons.push('password must not contain any spaces');
    }

    else{
        valid;
    }

    return{
        valid : valid,
        reason : reasons,
    }
}

console.log(checkPassword(password));
console.log(checkPassword(password2));




































//     for(const letter of password){

//         if(password.length < 8){
//             valid = false;
//             reasons.push('password length must at least be 8 characters')
//             break;
//         }

//         else if(! letter >= '0' || ! letter <= '9'){
//             valid = false;
//             reasons.push('password must contain a number');
//             break;
//         }

//         else if(! password.includes(toUpperCase())){
//             valid = false;
//             reasons.push('password must contain an uppercase letter');
//             break;
//         }
//     }
    
//     return{
//         valid : valid,
//         reasons : reasons,
//     }
// }