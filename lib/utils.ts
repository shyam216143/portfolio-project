export const ValidationString = (value: unknown, maxLength:number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}

export const getErrorMessage = (error : unknown):string=>{
    let message:string;

    if (error instanceof Error) {
        message = String(error.message)
    } else if (error && typeof error == "object"  && "message" in error){
        message = String(error.message)
    } else if (error && typeof error == "string") {
            message = error
    }
    else{
        message = "An error occurred. Please try again later."
    }
    return message
}