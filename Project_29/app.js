const strengther = document.querySelector('.strengther');
const passwordInput = document.querySelector('input[type="text"]');
const passwordCheck = document.querySelector('.password-check');

passwordInput.addEventListener('input', updateStrengther);

function updateStrengther() {
    const assesments = calculatePasswordStrength(passwordInput.value);

    let strength = 100;
    passwordCheck.innerHTML = ""
    assesments.forEach(assesment => {
        if (assesment == null) return;

        strength -= assesment.strengthLost;
        const pwdCheckEl = document.createElement('p');
        pwdCheckEl.innerHTML = assesment.pwdCheck;
        passwordCheck.appendChild(pwdCheckEl);
    });
    strengther.style.setProperty('--strength-amount', strength)
}

function calculatePasswordStrength(password) {
    const assesment = [];
    assesment.push(lengthAssessment(password));
    assesment.push(lowercaseAssessment(password));
    assesment.push(uppercaseAssessment(password));
    assesment.push(numberAssessment(password));
    assesment.push(specialCharaterAssessment(password));
    assesment.push(repeatCharacterAssessment(password));
    return assesment;
}

// lengthAssesment Function
function lengthAssessment(password) {
    const length = password.length;

    if (length <= 5) {
        return {
            pwdCheck: 'Password is too short',
            strengthLost: 40,
        };
    }
    if (length <= 10) {
        return {
            pwdCheck: 'Password could be longer',
            strengthLost: 15,
        }
    };
}

// lowercaseAssesment Function
function lowercaseAssessment(password) {
    return characterTypeAssessment(password, /[a-z]/g, 'lowercase  characters');
}

// uppercaseAssesment Function
function uppercaseAssessment(password) {
    return characterTypeAssessment(password, /[A-Z]/g, 'uppercase  characters');
}

// Number Assesment Function
function numberAssessment(password) {
    return characterTypeAssessment(password, /[0-9]/g, 'numbers  characters');
}

// Special Charater Assessment Function
function specialCharaterAssessment(password) {
    return characterTypeAssessment(password, /[^0-9a-zA-Z\s]/g, 'special  characters');
}

// Character Type Assesment Function
function characterTypeAssessment(password, regX, assesmentType) {
    const characterMatch = password.match(regX) || [];
    if (characterMatch.length === 0) {
        return {
            pwdCheck: `Password no ${assesmentType}`,
            strengthLost: 20
        };
    }

    if (characterMatch.length <= 2) {
        return {
            pwdCheck: `Password must have more ${assesmentType} character`,
            strengthLost: 5
        };
    }
}

function repeatCharacterAssessment(password) {
    const repeatCharMatch = password.match(/(.)\1/g) || [];

    if (repeatCharMatch.length > 0) {
        return {
            pwdCheck: 'Password has repeat character',
            strengthLost: repeatCharMatch.length * 10,
        }
    }
}