console.log("Hello world");
const loadPhone=async()=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res= await fetch(url);
    const data= await res.json();
    console.log(data.data)
    displayData(data.data);

}

const displayData=(phones)=>{
    const phoneContainer=document.querySelector('#phone-container');
    phones.forEach(phone =>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card h-100">
          <img src="${phone.image}" class="card-img-top" alt="...">
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



loadPhone();