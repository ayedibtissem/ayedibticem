function WordCount(str) { 
 
   // n = str.length;
//return n;
 //return str.split(' ').length;
 
vowel=["a","e","o","i","u"];
  count=0;
  
      for(i=0;i<str.length;i++){
        if  (vowel.indexOf(str[i]) !== -1){
          
        count++;
        return count;
        }
  }
 
    
}console.log(WordCount("hello  world."));

    
    
    
   