class UserValidations {

    validateName(name) {
        if(name === '') {
            return {
                status: false,
                err: 'Debe tener un nombre válido'
            }
        } 
        if(name.length < 3) {
            return {
                status: false,
                err: 'Debe tener mínimo 3 caracteres'
            }
        } else {
            return {
                status: true
            }
        }
    }
    validateRut(rutDv){
        const tmp 	= rutDv.split('-');
        let digv	= tmp[1]; 
        const rut 	= tmp[0];
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutDv )){
            return {
                status: false,
                err: 'Formato rut inválido'
            }
        }
        if(this.validateDv(rut) != digv){
            if ( digv === 'K' ) digv = 'k' ;
            return {
                status: false,
                err: 'Dígito verificador inválido'
            }
        }else{
            return{
                status: true
            }
        }
    }
    validateDv(T){
        var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
    }

    validateEmail(email){
        
        if(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
            return{
                status: true
            }
            
        }else{
            return {
                status: false,
                err: "Email inválido"
            } 
        }
    }
    valideMatchPass(pass, confPass){
        if(pass === confPass){
            return {
                status: true
            }
        }else{
            return{
                status: false,
                err: "Password no coinciden"
            }
        }
    }
}
export default UserValidations;