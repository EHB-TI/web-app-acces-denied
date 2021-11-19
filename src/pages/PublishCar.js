import React from 'react';
import "../layout/PublishCar.css";

function PublishCar() {
    return (
        <div className="PublishCar">
            <section>
                <h1>Plaats zoekertje</h1>
                <form action="/verkoop" method="POST" enctype="multipart/form-data">
                    { /*   @csrf */ }
                     {/* BRAND */}
                     <div className="form-group">
                         <label for="PublishBrand">Brand</label>
                        <select className="form-control" name="brand" id="PublishBrand">
                            <option value="">Choose ...</option>
                            <optgroup label="Brand" id="optionPublishBrand"/>                        
                        </select>
                    </div>
                    {/* MODEL */}
                    <div className="form-group">
                        <label for="PublishModel">Model</label>
                        <select className="form-control" name="model" id="PublishModel">
                            <option value="">Model</option>
                            <optgroup label="Model" id="optionPublishModel"/> 
                        </select>
                    </div>
                    {/* FUEL */}
                    <div className="form-group">
                        <label for="PublishFuel">Fuel</label>
                        <select className="form-control" name="fuel" id="PublishFuel">
                            <option value="">Fuel</option>
                            <optgroup label="Fuel">
                                    <option value="Gasoline"></option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="LPG">LPG</option>
                            </optgroup>
                        </select>     
                    </div>
                    {/* FUEL */}
                    <div className="form-group">
                        <label for="PublishConstructionYear">Construction year</label>
                        <select className="form-control" name="constructionYear" id="PublishConstructionYear">
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
                     </div>
                    
                    {/* BODY */}
                    <div className="form-group">
                        <label for="PublishBody">Body</label>
                        <select className="form-control" name="body" id="PublishBody">
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
                    </div>

                    <div className="form-group">
                        <label for="aantalDeuren">Aantal Deuren</label>
                        <br/>
                        <select name="aantalDeuren" className="form-control" id="PublishDoors">
                            <option value="">Kies...</option>
                            <optgroup label="Aantal deuren">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </optgroup>
                        </select>
                        { /* @error   */ } 
                    </div>

                    <div className="form-group">
                        <label for="Transmissie">Transmissie</label>
                        <br/>
                        <select name="transmissie" className="form-control"
                            id="PublishTransmission">
                            <option value="">Kies...</option>
                            <optgroup label="Transmissie">
                                <option value="Automaat">Automaat</option>
                                <option value="Handgeschakeld">Handgeschakeld</option>
                            </optgroup>
                        </select>
                        { /* @error   */ } 
                    </div>

                    <div className="form-group">
                        <label for="Kleur">Kleur</label>
                        <br/>
                        <select name="kleur" className="form-control "
                            id="PublishColor">
                            <option value="">Kies...</option>
                            <optgroup label="Kleur">
                                <option  value="Rood">Rood</option>
                                <option  value="Beige">Beige</option>
                                <option  value="Paars">Paars</option>
                                <option  value="Blauw">Blauw</option>
                                <option  value="Zilver">Zilver</option>
                                <option  value="Groen">Groen</option>
                                <option  value="Bruin">Bruin</option>
                                <option  value="Wit">Wit</option>
                                <option  value="Zwart">Zwart</option>
                                <option  value="Overrige kleuren">Overrige kleuren</option>

                            </optgroup>
                        </select>

                        { /* @error   */ } 
                    </div>

                    <div className="form-group">
                        <label for="KleurInterieur">Kleur Interieur</label>
                        <br/>
                        <select name="kleurInterieur" className="form-control"
                            id="PublishInteriorColor">
                            <option value="">Kies...</option>
                            <optgroup label="Kleur interieur">
                                <option value="Zwart">Zwart</option>
                                <option  value="Rood">Rood</option>
                                <option  value="Beige">Beige</option>
                                <option value="Bruin">Bruin</option>
                                <option  value="Wit">Wit</option>
                                <option  value="Overrige kleuren">Overrige kleuren</option>

                            </optgroup>
                        </select>

                        { /* @error   */ } 
                    </div>

                    <div className="form-group">
                        <label for="AantalZetels">Aantal Zetels</label>
                        <br/>
                        <input type="number" className="form-control"
                             name="aantalZetels"/>
                        { /* @error   */ } 
                    </div>


                    <div className="form-group">
                        <label for="KilometerStand">Kilometerstand(km)</label>
                        <br/>
                        <input type="number" className="form-control"
                            name="kilometerstand"/>

                      

                    </div>


                    <div className="form-group">
                        <label for="CO2">CO₂(g/km)</label>
                        <br/>
                        <input type="number" className="form-control" 
                            name="co2"/>

                       

                    </div>



                    <div className="form-group">
                        <label for="Vermogen">Vermogen(pk)</label>
                        <br/>
                        <input type="number" className="form-control"  name="vermogen"/>

                   

                    </div>



                    <div className="form-group">
                        <label for="MotorInhoud">Motor Inhoud(cc)</label>
                        <br/>
                        <input type="number" className="form-control"
                             name="motorInhoud"/>

                
                    </div>


                    <br/>
                    <br/>
                    <hr/>
                    

                    <div id="Opties">
                        <h2>Opties</h2>
                        <br/>

                        <div>
                            <input type="checkbox" value="4x4" name="opties[]"/>
                            <br/>

                            <input type="checkbox" value="ABS" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Adaptieve lichten" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Adaptive Cruise Control" name="opties[]"
                            />

                            <br/>
                            <input type="checkbox" value="Airbags" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Airconditioning" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Alarm" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Lederen bekleding" name="opties[]" />
                        
                            <br/>

                            <input type="checkbox" value="Bluetooth" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Boordcomputer" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Centrale vergrendeling" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Climate control" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Cruise Control" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Dodehoekdetectie" name="opties[]"
                            />

                        </div>

                        <div>

                            <input type="checkbox" value="Elektrische koffer" name="opties[]"
                            />
                            <br/>


                            <input type="checkbox" value="Elektrische buitenspiegels" name="opties[]"
                            />
                            <br/>

                            <input type="checkbox" value="Elektrische stoelverstelling" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Electronic Stability Program" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Elektrische ramen" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Emergency brake assist" name="opties[]"
                            />
                            <br/>

                            <input type="checkbox" value="Isofix" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Keyless entry" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Lichtmetalen velgen" name="opties[]"
                                />
                            <br/>
                            <input type="checkbox" value="Metaalkleur" name="opties[]" />
                            <br/>

                            <input type="checkbox" value="Mistlampen" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Navigatiesysteem" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Opena dak" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Panoramadak" name="opties[]" />

                        </div>

                        <div>

                            <input type="checkbox" value="Parkeerassistent" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Parkeercamera" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Parkeersensor" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Radio" name="opties[]" />
                            <br/>

                            <input type="checkbox" value="Schuifdeur" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Sportpakket" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Sportstoelen" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Spraakbediening" name="opties[]"
                            />
                            <br/>

                            <input type="checkbox" value="Startonderbreker" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Start-stop-systeem" name="opties[]"
                            />
                            <br/>
                            <input type="checkbox" value="Stoelmassage" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="Stoelventilatie" name="opties[]"
                            />
                            <br/>
                            <label for="CheckZetelverwarming">Zetelverwarming</label>
                            <input type="checkbox" id="Zetelverwarming"/>
                            <br/>
                            <label for="CheckStuurWielVerwarming">Stuurwielverwarming</label>
                            <input type="checkbox" id="CheckStuurWielVerwarming"/>

                        </div>
                        <div>

                            <input type="checkbox" value="Traction-control" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Trekhaak" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Verkeersbordherkenning" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Vermoeidheidsdetectie" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Verwarmde buitenspiegels" name="opties[]"/>
                            <br/>
                            <input type="checkbox" value="Xenon verlichting" name="opties[]" />
                            <br/>
                            <input type="checkbox" value="USB" name="opties[]" />

                        </div>
                    </div>
                    <br/>
                    <hr/>


                    <h2>Details</h2>
                    <br/>
                    <div className="form-group">
                        <label for="Titel">Titel*</label>
                        <br/>
                        <input type="text" name="titel" className="form-control @error('titel') is-invalid @enderror"
                             placeholder="Geef een titel..."/>

                    { /* @error   */ } 
                    </div>


                    <div className="form-group">
                        <label for="Beschrijving">Beschrijving*</label>
                        <br/>
                        <textarea type="textarea" className="form-control @error('beschrijving') is-invalid @enderror"
                            name="beschrijving" placeholder="Schrijf een beschrijving..." rows="12"
                            cols="50">Beschrijving</textarea>

                    { /* @error   */ } 
                    </div>

                    <div className="form-group">
                        <div>
                            <label className="form-label">Voeg foto toe</label>
                            <input className="form-control @error('afbeeldingAuto') is-invalid @enderror" id="formFileLg"
                                type="file" name="afbeeldingAuto"/>
                           
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <h2>Prijs</h2>
                    <br/>

                    <div className="form-group">
                        <label for="Soortprijs">Prijsklasse</label>
                        <br/>
                        <select name="soortPrijs" className="form-control" id="soortPrijs">
                            <option value="Vraagprijs">Vraagprijs</option>
                            <option value="Bieden">Bieden</option>
                            <option value="Ruilen">Ruilen</option>
                            <option value="Gratis">Gratis</option>
                        </select>
                    </div>

                    <div id="prijsMethode">
                        <label for="Prijs">Prijs</label>
                        <br/>
                        <input type="number" className="form-control "
                             placeholder="0,00 &#8364; " name="prijs" id="Prijs"></input>
                    </div>

                    <br/>
                    <br/>
                    <hr/>


                    <div>
                        <h2>Levering</h2>
                        <br/>
                        <label for="LeveringsKeuze">Leveringskeuze</label>
                        <br/>
                        <div className="form-group">
                            <select name="leveringsKeuze" className="form-control" value="{{ old('leveringsKeuze') }}" id="">
                                <option value="Ophalen">Ophalen</option>
                                <option value="Verzenden">Verzenden</option>

                            </select>
                        </div>
                        <br/>
                    </div>

                    <br/>
                    <input  className="btn btn-dark" type="submit" value="Plaats je zoekertje"></input>
                    <br/>
                    <br/>

                    <input type="hidden" name="user_id" value="{{Auth::user()->id}}"></input>




                    
                    
                    


                    

                </form>

            </section>
            
        </div>
    )
}

export default PublishCar;
