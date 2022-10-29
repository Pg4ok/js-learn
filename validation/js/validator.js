'use strict'

class Validator{

    constructor(){
        this._loginValid=false;
        this._problemT="";
    }
    get gLoginVal(){
        return this._loginValid;
    }
    get gProblemT(){
        return this._problemT;
    }

    checkLogin(LoginValue){
        let RegExpression=/^[a-zA-Z][a-zA-Z0-9_\-]{15,5}$/;
        if(RegExpression.test(LoginValue))
            this._loginValid=true
        else
            this._loginValid=false
    }

}