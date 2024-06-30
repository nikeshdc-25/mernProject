class ApiError extends Error{
    constructor(status, message, errors = [], stack = []){
        super(message);
        this.status = status;
        this.errors = errors;
        if(stack){
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export default ApiError;