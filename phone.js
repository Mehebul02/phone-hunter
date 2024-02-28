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
  const showBtn = document.getElementById('show_all_btn');
  if (phones.length > 12){
    showBtn.classList.remove('hidden')
  }
  else{
    showBtn.classList.add('hidden')
  }
  phones = phones.slice(0,12)
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
  })
  // loading spinner 
  toggleLoading(false);
};
// handle Search button 
const handleSearch = () =>{
  toggleLoading(true)
    const searchField = document.getElementById('search_field').value;
    console.log(searchField);
    loadPhone(searchField)
    
    

};
const toggleLoading = (spinner) => {
  const toggleSpinnerLoading = document.getElementById('spinner_loading')
  if(spinner){
    toggleSpinnerLoading.classList.remove('hidden')
  }
  else{
    toggleSpinnerLoading.classList.add('hidden')
  }
}

// loadPhone();
