// Collecting Warning Elements
const warn1 = document.querySelector('.warn1')
const warn2 = document.querySelector('.warn2')
const warn3 = document.querySelector('.warn3')
const warn4 = document.querySelector('.warn4')
const warn5 = document.querySelector('.warn5')

// Hiding Warning by default
warn1.style.display = 'none'
warn2.style.display = 'none'
warn3.style.display = 'none'
warn4.style.display = 'none'
warn5.style.display = 'none'

// Flags to verify if form is filled correctly or not
// 0 = Not filled correctly
// 1 = Filled correctly
var flag1 = 0
var flag2 = 0
var flag3 = 0
var flag4 = 0
var flag5 = 0

// Selecting all inputs for suitable border decoration
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')
const input5 = document.querySelector('.input5')

// Function to validate if Name is >= 5 chars
function validateName() 
{
    let fname = document.getElementById('nameId')
    valName = fname.value
    let pass = document.getElementById('passId')
    valPass = pass.value
    {
        if(valName.length<5) {
            warn1.style.removeProperty('display')
            input1.style.border = '2px solid red'
        }
        else {
            warn1.style.display = 'none'
            input1.style.border = '2px solid green'
            flag1 = 1
        }
        // Makes sure password and name are not same if user changes name to match password after password field is validated
        if(valPass === valName) {
            warn4.style.removeProperty('display')
            input4.style.border = '2px solid red'
        }
        else {
            warn4.style.display = 'none'
            input4.style.border = '2px solid green'
            flag4 = 1
        }
    }
}

// Function to validate if Email has '@' or not
function validateEmail() 
{
    let email = document.getElementById('emailId')
    valEmail = email.value
    if(valEmail.includes('@') === false) {
        warn2.style.removeProperty('display')
        input2.style.border = '2px solid red'
    }
    else {
        warn2.style.display = 'none'
        input2.style.border = '2px solid green'
        flag2 = 1
    }
}

// Function to validate phone number
function validatePhone() 
{
    let phone = document.getElementById('phoneId')
    valPhone = phone.value
    if(valPhone.length<10 || valPhone === '1234567890' || valPhone === '0000000000' || valPhone.length>10) {
        warn3.style.removeProperty('display')
        input3.style.border = '2px solid red'
    }
    else {
        warn3.style.display = 'none'
        input3.style.border = '2px solid green'
        flag3 = 1
    }
}

// Function to validate if Password is strong
function validatePass() 
{
    let fname = document.getElementById('nameId')
    let valName = fname.value
    let pass = document.getElementById('passId')
    valPass = pass.value
    if(valPass === 'password' || valPass.length<8 || valPass === valName) {
        warn4.style.removeProperty('display')
        input4.style.border = '2px solid red'
    }
    else {
        warn4.style.display = 'none'
        input4.style.border = '2px solid green'
        flag4 = 1
    }
    // Makes sure password and Confirm password are same if user changes C Pass to unmatch password after C password field is validated
    let cpass = document.getElementById('cpassId')
    valCpass = cpass.value
    if(valCpass !== valPass) {
        warn5.style.removeProperty('display')
        input5.style.border = '2px solid red'
    }
    else {
        warn5.style.display = 'none'
        input5.style.border = '2px solid green'
        flag5 = 1
    }
}

// Function to validate if Password matches Confirm Password
function validateCpass() 
{
    let pass = document.getElementById('passId')
    valPass = pass.value
    let cpass = document.getElementById('cpassId')
    valCpass = cpass.value
    if(valCpass !== valPass) {
        warn5.style.removeProperty('display')
        input5.style.border = '2px solid red'
    }
    else {
        warn5.style.display = 'none'
        input5.style.border = '2px solid green'
        flag5 = 1
    }
}

// Function that allows form to be submitted only if all flags are validated
function submitAllow() {

    if(flag1 === 1 && flag2 === 1 && flag3 === 1 && flag4 === 1 && flag5 === 1) {
        return true
    }
    else {
        return false
    }
}

