import { useEffect, useState } from "react"
import Card from "./components/Card";
import Navbar from "./components/Navbar";


export interface CurrencyDetails{
  price:number,
  currency_name:string
}

const App:React.FC=()=>{
  const currencies = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR",
    "ZMW", "ZWL"
  ];

  let [current_array,setArray]=useState<CurrencyDetails[]>([]);  
  let [base_currency,setCurrency]=useState<string>("INR");

  function setNewCurrency(currency_name:string):void{
    setCurrency(currency_name);
  }
  useEffect(()=>{
    async function initialize(){
     let details=await fetch(`https://open.er-api.com/v6/latest/${base_currency}`); 
     let response=await details.json()
     let a=response.rates;
     console.log(a)
     let new_array:CurrencyDetails[]=[]
     for(let i=0;i<currencies.length;i++){
      let fetched:CurrencyDetails={
        price:a[currencies[i]],
        currency_name:currencies[i]
      }
      new_array.push(fetched);
     }
     setArray(new_array);
    }
    initialize();
    console.log(base_currency);
   
   
  },[base_currency]);

  return(
    
   <div>
    <Navbar key={'navbar'} array={currencies} setfunction={setNewCurrency}/>
    {
      current_array.map((a,index)=><Card key={index} price={a.price} currency_name={a.currency_name}/>)
    }
   </div>
  );
}

export default App
