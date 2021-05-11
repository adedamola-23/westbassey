

const result = document.querySelector('.result')

const fetchData = async() => {
  const {data} = await axios.get('/api/2-basic-api')
 const products = data.map((product)=>{
   const {image:{url},name,price} = product
   return `<article class="product">
      <img
        src=${url}
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">${price}</h5>
      </div>
    </article>`
 }).join('')
 try {
  
  result.innerHTML =  products
 } catch (error) {
   result.innerHTML =  `<h4>error</h4>`
 }
}
fetchData()