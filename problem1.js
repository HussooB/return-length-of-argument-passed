const arry=["Hussein", "Beshir", "Abdulkadir"];
let funct = (allStudent,studentName) =>{
  for (let Name of allStudent){
    if (Name === studentName){
      return Name;
    }
  }
}
console.log(funct(arry,"Hussein"));
