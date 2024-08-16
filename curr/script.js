    const api_key1 = 'bbb929b96c3f485923dd2480'
    const url1 = `https://v6.exchangerate-api.com/v6/bbb929b96c3f485923dd2480/latest/USD`
     // const api_key = 'LYmwDjDRESFQYWLU7nN84xzm69Yfsn'
    // const url = `https://www.amdoren.com/api/currency.php?api_key=LYmwDjDRESFQYWLU7nN84xzm69Yfsn&from=${from}&to=${to}`
    
   
    const UseCurrencyInfo = async () =>{
        try{
            const response = await fetch(url1)
            if(!response.ok){
                throw new Error ("there is problem in fetching the data")
            }
            const data = await response.json()

            return data[`conversion_rates`]
            
        }

        catch(error){
            console.error("Network fetching error", error)
            throw error;
        }




    }


    (async()=>{
        try{
            const data = await UseCurrencyInfo()
            console.log(Object.keys(data))
        }
        catch{
            console.error("problem")
        }
    })();
