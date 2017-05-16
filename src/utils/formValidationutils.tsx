const formValidationUtils = (type, value)=> {
    switch (type){
        case "email": {
            var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/
            return emailRegex.test(value);
        }
        case "url": {
            var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
            return  urlRegex.test(value);
        }
        case "password":{
            return true; //TODO
        }
        default:
          return true;

    }


}

export default formValidationUtils;