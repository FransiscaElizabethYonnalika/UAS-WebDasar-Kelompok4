const api_url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
async function getdata(){
  const response = await fetch(api_url);
  const data = await response.json();  
  const {USD,GBP,EUR} = data ;
  document.getElementById('usd').textContent = data.bpi.USD.rate;
  document.getElementById('gbp').textContent = data.bpi.GBP.rate;
}

getdata();
