let qS = (a) => document.querySelector(a);

let val1,val2;


// let calculator = (function () {})();

let sum = qS('#mainInput').placeholder;
let action;
let actionUsed=false;
// let sum;

qS('.divBtn').onclick = function(){
    if(!isNaN(event.target.value))
    {

        
        if(actionUsed){
      
            if(val2 == null)
                val2 = "";
            val2 += event.target.value;
            
            console.log('val2= ',val2);
        }
        else{
            if(val1 == null)
                val1 = "";
            
            val1+=event.target.value;
            console.log('val1= ',val1);
            
            // val2=
        }
        
        qS('#mainInput').placeholder=event.target.value;
        
    }
    else{
        if(actionUsed){
        //    switch() 
            
        }else{
            
            actionUsed = true;
            //result

            val2 = null;
        }
     action = event.target.value;
        console.log(action);
    }

}



