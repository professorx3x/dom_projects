const form =document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const h=parseInt(document.querySelector('#height').value)
  const w=parseInt(document.querySelector('#weight').value)
  const r=document.querySelector('#results')
  if(h===''||h<0|| isNaN(h)){
    r.innerHTML='please give a valid height';
  } else if(w===''||w<0|| isNaN(w)){
    r.innerHTML='please give a valid weight';
  }else{
    const bmi=(w/((h*h)/10000)).toFixed(2)
    //show the results
    r.innerHTML=`<span>${bmi}</span>`;
  }


})