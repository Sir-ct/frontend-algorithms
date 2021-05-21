function convertFahrToCelsius(f){
   var c = ((f - 32) * 5/9).toFixed(4);
   var pf = parseInt(f)
   
   if(typeof f === "number" || (typeof f === "string" && pf + 0 == pf)){
       console.log(c)
   }else
      console.log(f+" is not a valid number but a/an "+typeof f)
   
  
} 

function checkYuGiOh(n){
   var arr = []
   var pn = parseInt(n)

   if(typeof n === "number" || (typeof n =="string" && pn + 0 == pn)){
      for(let i=1; i<=n; i++){
         if(i%2 == 0){
            arr[i] = "yu"
         }
         else if(i%3 == 0){
            arr[i] = "gi"
         }
         else if(i%5 == 0){
            arr[i] = "oh"
         }

            arr.push(i)
         }
      }
     
   console.log(arr)
}







checkYuGiOh(5)

//convertFahrToCelsius()
