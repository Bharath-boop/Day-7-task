const result=new XMLHttpRequest;
result.open("GET","https://restcountries.com/v3.1/all",true);
result.send();
result.onload=function(){
    const response=result.response;
    var responsedata=JSON.parse(response);
 //   console.log(responsedata);
    console.log(responsedata.filter((contry)=>contry.region==="Asia"));
    const population1=responsedata.filter((pop)=>pop.population<200000);
    population1.map((cn)=> console.log(cn.name.common));
    responsedata.forEach(element => {console.log(`
      Name:${element.name.common}
   capital:${element.capital} 
      flag:${element.flag}`);});
   var populat=responsedata.map((x)=>x.population)
    let total=populat.reduce((a,r)=>{
        return a+r
    },0)
     console.log("Total population:" +total);
 
}