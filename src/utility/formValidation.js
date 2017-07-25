export const validationConstants = {
	PASSWORD: 'password', 
	EMAIL: 'email'
};

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.length > 0 && re.test(email);
}

export function validatePassword(password){
	return password.length >  0 && password.length >= 8; 
}

export function validate(validations, value){
	let { PASSWORD, EMAIL } = validationConstants; 
	let error = ''; 
	_.forEach(validations, validation => {
		switch(validation){
			case PASSWORD: 
				error = ''; 
				break; 
			case EMAIL:
				if(!validateEmail(value)){
					error = 'Invalid Email.'; 
				}
		}
	}); 

	return error; 
}