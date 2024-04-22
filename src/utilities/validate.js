

export const  validateForm = (email, password, name) =>{

    const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    // const validName = /^[a-zA-Z ]{2,30}$/.test(name)

    // if(name && !validName) return "Invalid Name"
    if(email.trim() === '') return "Enter Email"

    if(!validEmail) return "Invalid Email"
    if(!validPassword) return "Invalid Password"

    return null;
} 