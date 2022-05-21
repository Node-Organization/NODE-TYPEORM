
export class ErrorStatus{
    mensagem: string;
    status: number;

    constructor(err: string){
        switch (err) {
            case "Email incorrect":
                this.mensagem = err; 
                this.status   = 400;
            break;

            case "User already exists":
                this.mensagem = err; 
                this.status   = 400;
            break;

            case "Incorrect name!":
                this.mensagem = err;
                this.status   = 400;
            break;

            case "Tag already exists":
                this.mensagem = err;
                this.status   = 400;
            break;

            case "Email/Password incorrect":
                this.mensagem = err;
                this.status   = 401;
            break;

            case "User receiver does not exists":
                this.mensagem = err;
                this.status   = 400;
            break;

            case "Incorrect user receiver":
                this.mensagem = err;
                this.status   = 400;
            break;

            case "Token missing":
                this.mensagem = err;
                this.status   = 401;
            break;
            
            default:
                this.mensagem = "Internal server error";
                this.status   = 500;
            break;
        }
    }

    getErr(){
        return {message: this.mensagem, status: this.status};
    }
}