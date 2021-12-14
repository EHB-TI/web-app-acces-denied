import {React,useRef,useEffect,useState} from 'react';
import "../layout/SearchCar.css";
import { useHistory } from "react-router";
import Cars from "../data/cars";

function SearchCar() {
    const brand = useRef()
    const model = useRef()
    const fuel = useRef()
    const bodywork = useRef()
    const price = useRef()
    const constructionYear = useRef()
    const history = useHistory()

    const [models, setModels] = useState([]);

    function getModels(brand){
        

        if(brand != null)
        {
            setModels([]);

        for(let car of Cars)
        {
            if(car["brand"] == brand)
            {
                
                setModels(car["models"]);
                
            }
        }
    }
        
    }




    const searchAnnouncement = async (e) =>
    {
        e.preventDefault();

       


        let objData = {
            brand: brand.current.value,
            model: model.current.value,
            fuel: fuel.current.value,
            bodywork: bodywork.current.value,
            price: price.current.value,
            constructionYear: constructionYear.current.value
        }

        history.push({
            pathname: '/announcements',
            state: {object:objData}
        }) 
    }

    useEffect(()=> {
        const unsub = getModels();  
    return unsub
    },[])

    return (
        <div className="SearchCar">            
            <section>
                <h1>Search for your dreamcar</h1>
                {/* TODO: FORM REQUEST POST ?? */}
                <form action="/search" method="POST" onSubmit={searchAnnouncement}>
                    {/* BRAND */}
                    <select name="brand"  ref={brand} onChange={(val) => getModels(val.target.value)} id="SearchBrand">
                        <option value="">Brand</option>
                        <optgroup label="Brand" id="optionSearchBrand"/> 
                        { Cars.map(post => {
                            return(
                                <option value={post["brand"]} >{post["brand"]}</option>
                            )
                        })


                        }                  
                    </select>
                    {/* MODEL */}
                    <select name="model" ref={model} id="SearchModel">
                        
                    <option value="">Model</option>
                        <optgroup label="Model" id="optionSearchModel"/>
                        
                        { models.map(post => {
                            return(
                                <option value={post} >{post}</option>
                            )
                        })


                        }    


                         
                    </select>
                    {/* FUEL */}
                    <select name="fuel" ref={fuel} id="SearchFuel">
                        <option value="">Fuel</option>
                        <optgroup label="Fuel">
                                <option value="Gasoline">Gasoline</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="LPG">LPG</option>
                        </optgroup>
                    </select>                
                  <br/>
                    {/* PRICE */}
                    <select name="price" ref={price} id="SearchPrice">
                        <option value="">Price</option>
                        <optgroup label="Price">
                            <option value="500">To 500 &euro;</option>
                            <option value="1000">To 1 000 &euro;</option>
                            <option value="1500">To 1 500 &euro;</option>
                            <option value="2000">To 2 000 &euro;</option>
                            <option value="2500">To 2 500 &euro;</option>
                            <option value="3000">To 3 000 &euro;</option>
                            <option value="3500">To 3 500 &euro;</option>
                            <option value="4000">To 4 000 &euro;</option>
                            <option value="4500">To 4 500 &euro;</option>
                            <option value="5000">To 5 000 &euro;</option>
                            <option value="6000">To 6 000 &euro;</option>
                            <option value="7000">To 7 000 &euro;</option>
                            <option value="8000">To 8 000 &euro;</option>
                            <option value="9000">To 9 000 &euro;</option>
                            <option value="1000">To 10 000 &euro;</option>
                            <option value="20000">To 20 000 &euro;</option>
                            <option value="30000">To 30 000 &euro;</option>
                            <option value="40000">To 40 000 &euro;</option>
                            <option value="60000">To 60 000 &euro;</option>
                            <option value="80000">To 80 000 &euro;</option>
                            <option value="100000">To 100 000 &euro;</option>
                        </optgroup>
                    </select>
                    {/* BODY */}
                    <select name="body" ref={bodywork} id="SearchBody">
                        <option value="">Body</option>
                        <optgroup label="Body">
                            <option value="Monospace">Monospace</option>
                            <option value="Break">Break</option>
                            <option value="Berline">Berline</option>
                            <option value="CityCar">City car</option>
                            <option value="Monovolume">Monovolume</option>
                            <option value="Cabriolet">Cabriolet</option>
                            <option value="Coupé">Coupé</option>
                            <option value="Compact">Compact</option>
                            <option value="SUVorOffRoad">SUV or off road cars</option>
                        </optgroup>
                    </select>
                {/* CONSTRUCTION YEAR */}
                    <select name="constructionYear" ref={constructionYear} id="SearchConstructionYear">
                        <option value="">Contruction Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                  
                    <br/>
                    {/* SUBMIT BUTTON */}
                    <div className="row">
                    <button type="submit" className="btn btn-success d-flex justify-content-center">Search</button>
                    </div>
                </form>
            </section>            
        </div>
    )
}

export default SearchCar;