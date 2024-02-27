const loadPhone = async() => {
    const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones =data.data;
    // console.log(phones)
    displayPhone(phones);

}
const displayPhone = phones => {
    const phoneCard=document.getElementById('phone_card_container')
    phones.forEach(phone => {
        console.log(phone)
        const div =document.createElement('div');
        div.classList=`card w-96 bg-base-100 shadow-xl p-10`
        div.innerHTML =`<figure><img src='${phone.image}' alt="Shoes"/></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;
        phoneCard.appendChild(div)
        
        



        
    });

}
loadPhone()