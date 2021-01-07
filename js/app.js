try{
  // myFun();

  // Produce a TypeError
  null.myfun(); 

}catch(e){
  // console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
}finally{
  console.log('Finally runs regardless of result...');
}
console.log('Programm is continue...');