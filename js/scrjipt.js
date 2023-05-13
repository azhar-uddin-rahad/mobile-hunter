console.log("Hello world");
const loadPhone=async(phoneName,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    const res= await fetch(url);
    const data= await res.json();
    displayData(data.data,dataLimit);

}
const phoneContainer=document.querySelector('#phone-container');

const error=document.querySelector('#error')
const displayData=(phones,dataLimit)=>{ 
    if(dataLimit && phones.length > 10){
        phones=phones.slice(0,10);
        seeMoreBtn.classList.remove('d-none');     
    }
    else{
        seeMoreBtn.classList.add('d-none'); 
    }
    if(phones.length == 0){
        error.classList.remove('d-none');
    }
    else{
        error.classList.add('d-none');
    }
    phones.forEach(phone =>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card h-100">
          <img src="${phone.image}" class="card-img-top w-50" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
          </div>
        </div>
      </div>
        `;
        phoneContainer.appendChild(div); 
    })
    spinner(false)
}

document.querySelector('#searchBtn').addEventListener('click',function(){
    processSearch(10);

})

document.querySelector('#seeMoreBtn').addEventListener('click',function(){
    processSearch();

})

const spinnerDiv=document.querySelector('#spinner')
const spinner=isLoading=>{
    if(isLoading){
        spinnerDiv.classList.remove('d-none');
    }
    else{
        spinnerDiv.classList.add('d-none');
    }
}



const processSearch=(dataLimit)=>{
    spinner(true)
    phoneContainer.innerHTML='';
    const inputField=document.querySelector('#inputField');
    const searchValue= inputField.value;
    loadPhone(searchValue,dataLimit);
}