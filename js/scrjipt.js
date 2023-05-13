console.log("Hello world");
const loadPhone=async(phoneName)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    const res= await fetch(url);
    const data= await res.json();
    displayData(data.data);

}
const phoneContainer=document.querySelector('#phone-container');
const error=document.querySelector('#error')
const displayData=(phones)=>{ 
    phones=phones.slice(0,10);
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
}

document.querySelector('#searchBtn').addEventListener('click',function(){
    phoneContainer.innerHTML=''
 const inputField=document.querySelector('#inputField');
 const searchValue= inputField.value;
 loadPhone(searchValue);



})



loadPhone();