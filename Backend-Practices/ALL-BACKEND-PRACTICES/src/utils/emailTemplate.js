export const CheckMailResponse = (user,link)=>{
    return `
        <div>
            <h1>Hi ${user.name}</h1>
            <p>Please Click on the link to reset your password</p>
            <a href=${link}>Reset Password</a>    
        </div>

    `
}