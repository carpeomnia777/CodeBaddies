function validParentheses(parens) {
    let openParens = 0
    for (let i = 0; i < parens.length; i++){
        if(openParens == -1){
          return false;
        }
       else if(parens[0] === ")")  {
          return false;
        }
       else if(parens[parens.length - 1]==="(" ){
         return false;
       }
       if(parens[i] === '('){
         openParens++
       }else if(parens[i] ===')'){
         openParens--
       }
        }
    return openParens ==0
    
  }