

const result =  document.querySelector('.result')

const fetchData = async () => {
 try {
     const {data} = await axios.get('ogabassey.netlify.app/api/2-basic-api')
     result.textContent = data
 } catch (error) {
     console.log(error.response);
 }
}

fetchData()