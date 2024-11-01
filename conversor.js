const apiKey = '634a218957573c14bdad4e27';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;


//Função para consulta à taxa de câmbio via API
//##########################################################
async function getExchangeRate(ofCoins, forCoins){
    try{
        const reponse = await fetch(`${apiURL}${ofCoins}`);
        const data = response.json();

        if(data.result === "success"){
            return data.conversion_rates[forCoins];
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch (erro){
        console.error("Erro:", error);
        return null;
    }
}

//##########################################################