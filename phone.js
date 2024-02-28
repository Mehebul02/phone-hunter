const loadPhone = async (searchText,isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones)
  displayPhone(phones,isShowAll);
};
const displayPhone = (phones,isShowAll) => {
  const phoneCard = document.getElementById("phone_card_container");
  phoneCard.innerText = "";
  const showBtn = document.getElementById("show_all_btn");
  if (phones.length > 12 && !isShowAll) {
    showBtn.classList.remove("hidden");
  } else {
    showBtn.classList.add("hidden");
  }
  console.log('show All',isShowAll)
  if(!isShowAll){
    phones = phones.slice(0, 12);
  }
 
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList = `card  bg-blue-100 shadow-xl p-4`;
    div.innerHTML = `<figure><img src='${phone.image}' alt="Shoes"/></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick = "handleShowDetails('${phone.slug}') " class="btn btn-primary">Show Details</button>
          </div>
        </div>`;
    phoneCard.appendChild(div);
  });
  toggleSpinnerLoading(false);
};
// handle Search button
const handleSearch = (isShowAll) => {
  toggleSpinnerLoading(true);
  const searchField = document.getElementById("search_field").value;
  console.log(searchField);
  loadPhone(searchField,isShowAll);
};

const toggleSpinnerLoading = (isLoading) => {
  const toggleLoad = document.getElementById("spinner_loading");
  if (isLoading) {
    toggleLoad.classList.remove("hidden");
  } else {
    toggleLoad.classList.add("hidden");
  }
};
// handle show details 
const handleShowDetails = async (id) => {
  console.log('Click the show details',id);
  // load single phone data 
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  console.log(data)

}
// show All 
const handleShowAll = () => {
  handleSearch(true)
}
// loadPhone();
