const select = document.querySelector("#iller");

// Yardımcı fonksiyon: kart içeriğini güncelle
const updateCard = (html) => {
  weatherCard.innerHTML = html;
};

// Türkiye illerini api'den çekme
const loadCities = async () => {
  const response  = await fetch("https://turkiyeapi.dev/api/v1/provinces");
  const data = await response.json();
  const iller = data.data; // API'nin yapısına göre değişebilir
  iller.forEach(il => {
      const option = document.createElement("option");
      option.value = il.name;
      option.textContent = il.name;
      select.appendChild(option);
    });
}



select.addEventListener("change", e => {
  console.log(`Seçilen il: ${e.target.value}`);
});


document.addEventListener("DOMContentLoaded",loadCities);