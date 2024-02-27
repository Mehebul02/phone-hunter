const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`
   
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones)
  displayPhone(phones);
};
const displayPhone = (phones) => {
  const phoneCard = document.getElementById("phone_card_container");
  phoneCard.innerText=''
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList = `card  bg-blue-100 shadow-xl p-4`;
    div.innerHTML = `<figure><img src='${phone.image}' alt="Shoes"/></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;
    phoneCard.appendChild(div);
  });
};
// handle Search button 
const handleSearch = () =>{
    const searchField = document.getElementById('search_field').value;
    console.log(searchField);
    loadPhone(searchField)
    

}
// loadPhone();
