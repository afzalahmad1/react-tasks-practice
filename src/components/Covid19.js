import { useEffect, useState } from "react"

const Covid19 = ()=>{
    const [covidData,setCovidData] = useState([]);
    const [countriesArr,setCountriesArr] = useState([]);
    const [country,setCountry] = useState("India");


    useEffect(()=>{
        FetchData();
    },[])
    // const FetchIndia = async ()=>{
    //     const res = await fetch(`http://disease.sh/v3/covid-19/countries/india`);
    //     const data = await res.json();
    //     setCovidData(data)
    // }

    useEffect(()=>{
        // console.log("jiii")
            fetch(`http://disease.sh/v3/covid-19/countries/${country}`)
            .then((res)=> res.json())
            .then((data)=>{
                return(
                    //  console.log(data)
                    setCovidData(data)
                )
            })
    },[country])
    const FetchData = async ()=>{
        const res = await fetch(`http://disease.sh/v3/covid-19/countries/`);
        const data = await res.json();
        //  console.log(data)
        setCovidData(data)
        if(data){
            let arr = [];
            for(let i=0;i<data.length;i++){
                if(!arr.includes(data[i].country)){
                    // console.log(data[i].country)
                    arr.push(data[i].country)
                }
            }
            setCountriesArr(arr)
        }
    }
    

    return(
        <div>
            <p>Covid Updates</p>
            <b>Select Country</b>
            <select onChange={(e)=> setCountry(e.target.value)}>
                {
                    countriesArr.map((country,idx)=>{
                        return(
                        
                                <option key={idx} value={country}>{country}</option>
                        
                        )
                    })
                }
            </select>
            {/* <button onClick={handleShow}>Show Data</button> */}
            {country && 
             <div>
                <h1>Country :{covidData.country}</h1>
            <p>Active : <b>{covidData.active}</b></p>
            <p>Cases :  <b>{covidData.cases}</b></p>
            <p>Continent : <b>{covidData.continent}</b></p>
            <p>Critical : <b>{covidData.critical}</b></p>
            <p>population : <b>{covidData.population}</b></p>
            <p >Recovered : <b>{covidData.recovered}</b></p>
            <p> Tests :<b>{covidData.tests}</b></p>
             </div>
            }

        </div>
    )
}
export default Covid19;