import React from 'react';
import "../layout/SearchCar.css";

function SearchCar() {
    return (
        <div>
            <h1 id="TitelKoop">Tweedehands auto kopen</h1>

<section id="KoopSection">

    

<form action="/search" method="POST">


<select name="merk" id="MerkKoop">
    <option value="">Merk</option>
    <optgroup label="Merk" id="optieGroupMerks">
        
    </optgroup>

</select>

<select name="model" id="ModelKoop">
<option value="">Model</option>
<optgroup label="Model" id="optieGroupModels">
        
    </optgroup>

</select>

<select name="brandstof" id="BrandstofKoop">
<option value="">Brandstof</option>
<optgroup label="Brandstof">
        <option value="Benzine">Benzine</option>
        <option value="Diesel">Diesel</option>
        <option value="Elektrisch">Elektrisch</option>
        <option value="Hybrid">Hybrid</option>
        <option value="LPG">LPG</option>
    </optgroup>

</select>
<br/>
<select name="prijs" id="PrijsKoop">
<option value="">Prijs</option>
<optgroup label="Prijs">
<option value="500">Tot 500 &euro;</option>
<option value="1000">Tot 1000 &euro;</option>
<option value="1500">Tot 1500 &euro;</option>
<option value="2000">Tot 2000 &euro;</option>
<option value="2500">Tot 2500 &euro;</option>
<option value="3000">Tot 3000 &euro;</option>
<option value="3500">Tot 3500 &euro;</option>
<option value="4000">Tot 4000 &euro;</option>
<option value="4500">Tot 4500 &euro;</option>
<option value="5000">Tot 5000 &euro;</option>
<option value="6000">Tot 6000 &euro;</option>
<option value="7000">Tot 7000 &euro;</option>
<option value="8000">Tot 8000 &euro;</option>
<option value="9000">Tot 9000 &euro;</option>
<option value="1000">Tot 10000 &euro;</option>
<option value="20000">Tot 20000 &euro;</option>
<option value="30000">Tot 30000 &euro;</option>
<option value="40000">Tot 40000 &euro;</option>
<option value="60000">Tot 60000 &euro;</option>
<option value="80000">Tot 80000 &euro;</option>
<option value="100000">Tot 100000 &euro;</option>

</optgroup>

</select>


<select name="carrosserie" id="CarrosserieKoop">
<option value="">Carrosserie</option>
<optgroup label="Carrosserie">
        <option value="Monospace">Monospace</option>
        <option value="Break">Break</option>
        <option value="Berline">Berline</option>
        <option value="Stadsauto">Stadsauto</option>
        <option value="Monovolume">Monovolume</option>
        <option value="Cabriolet">Cabriolet</option>
        <option value="Coupé">Coupé</option>
        <option value="SUV of Terreinwagen">SUV of Terreinwagen</option>
    </optgroup>

</select>

<select name="bouwjaar" id="BouwjaarKoop">
<option value="">Bouwjaar</option>
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
<br/>


<button type="submit">Zoek</button>
</form>

</section>
            
        </div>
    )
}

export default SearchCar;
