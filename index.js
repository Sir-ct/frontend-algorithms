function convertFahrToCelsius(f){
   var c = ((f - 32) * 5/9).toFixed(4);
   var pf = parseInt(f)
   
   if(typeof f === "number" || (typeof f === "string" && pf + 0 == pf)){
       console.log(c)
   }else
      console.log(f+" is not a valid number but a/an "+typeof f)
   
  
} 

function checkYuGiOh(n){
    
   var pn = parseInt(n)

   if(typeof n === "number" || (typeof n =="string" && pn + 0 == pn)){
       var arr = new Array
       for(let i=1; i<=n; i++){
           arr.push(i)

           if(i%2 === 0 && i%3 === 0 && i%5 === 0){
               arr[i-1] = "yu-gi-oh"
           }
           else if(i%2 === 0 && i%3 ===0){
               arr[i-1] = "yu-gi"
           }
           else if(i%3 === 0 && i%5 === 0){
               arr[i-1] = "gi-oh"
           }
           else if(i%2 === 0 && i%5 ===0){
               arr[i-1] = "yu-oh"
           }else if(i%2 === 0){
               arr[i-1] ="yu"
           }else if(i%3 === 0){
               arr[i-1] = "gi"
           }
           else if(i%5 === 0){
               arr[i-1] = "oh"
           }
           
       }
       
       console.log(arr)
   }
}







checkYuGiOh("20")

//convertFahrToCelsius()
