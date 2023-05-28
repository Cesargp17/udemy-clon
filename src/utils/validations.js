export const isValidEmail = (email) => {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  
  export const isEmail = (email) => {
    return isValidEmail(email) 
      ? undefined
      : 'El correo no parece ser válido';
  }

  export const isValidPassword = (password) => {

    const caracteresEspeciales = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    const mayusculas = /[A-Z]/;

    if( !caracteresEspeciales.test( password )){
      return 'La contraseña debe contener un carácter especial'
    };

    if( password.length <  6 ){
      return 'La contraseña debe tener minimo 6 carácteres'
    };

    if( !mayusculas.test( password )){
      return 'La contraseña debe tener minimo una letra mayúscula'
    }
  }
  
  