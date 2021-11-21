import React from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';
import "../layout/PublishCar.css";



function PublishCar() {
    const brands = ['TVR','Mclaren','Mercedes']
    const models = []
    const constructionYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
    const fuels = ['Gasoline','Diesel','Electric','Hybrid','LPG']
    const engines = []
    const gearboxes = ['Automaat','Handgeschakeld']
    const transmissions = ['Propulsion','traction','4 drive wheels']
    const bodyworks = ['Monospace','Break','Berline','City car','Monovolume','Cabriolet','Coupé','Compact','SUV or off road cars']
    const numberOfPlaces = ['2','3','4','5','6']
    const colors = ['Rood','Beige','Paars','Blauw','Zilver','Groen','Bruin','Wit','Zwart']
    const options = ['ABS','Adaptieve lichten']
    const deliveries = ['pick up','send']
    const priceOptions = ['Vraagprijs','Bieden','Ruilen','Gratis']
    
    return (
        <div className="PublishCar">
            <section>
                <h1>Plaats zoekertje</h1>
                <Form>
                    { /*   @csrf */ }
                    {/* IDENTITY */}
                    <h2>Identity</h2>
                    <Row className="mb-3">
                        {/* BRAND */}
                        <Form.Group as={Col} controlId="PublishBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Select defaultValue="" required>
                                {
                                    brands.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* MODEL */}
                        <Form.Group as={Col} controlId="PublishModel" required>
                            <Form.Label>Model</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    models.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* YEAR */}
                        <Form.Group as={Col} controlId="PublishConstructionYear" required>
                            <Form.Label>Construction Year</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    constructionYears.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    
                    {/* Engine and Transmission */}
                    <br/><hr/>
                    <h2>Engine and Transmission</h2>
                    <Row className="mb-3">
                        {/* FUEL */}
                        <Form.Group as={Col} controlId="PublishFuel">
                            <Form.Label>Fuel</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    fuels.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* ENGINE */}
                        <Form.Group as={Col} controlId="PublishEngine">
                            <Form.Label>Engine</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    engines.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* GEARBOX */}
                        <Form.Group as={Col} controlId="PublishGearbox">
                            <Form.Label>Gearbox</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    gearboxes.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* TRANSMISSION */}
                        <Form.Group as={Col} controlId="PublishTransmission">
                            <Form.Label>Transmission</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    transmissions.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    {/* Weight and performance */}
                    <br/><hr/>
                    <h2>Weight and performance</h2>
                    <Row className="mb-3">
                        {/* EMPTY WEIGHT */}
                        <Form.Group as={Col} className="mb-3" >
                            <Form.Label>Empty Weight(in kg)</Form.Label>
                            <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                        {/* ACCERERATION 0 TO 100 */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Acceleration 0 to 100 km/h(in secondes)</Form.Label>
                            <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                        {/* CONSUMPTION */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Consumption(in l/100kg)</Form.Label>
                            <Form.Control type="text" placeholder=""/>
                        </Form.Group>
                    </Row>

                    {/* Chassis and Bodywork */}
                    <br/><hr/>
                    <h2>Chassis and Bodywork</h2>
                    <Row className="mb-3">
                        {/* BODYWORK */}
                        <Form.Group as={Col} controlId="PublishBodywork">
                            <Form.Label>Bodywork</Form.Label>
                                <Form.Select defaultValue="">
                                {
                                    bodyworks.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* NUMBER OF PLACES */}
                        <Form.Group as={Col} controlId="PublishNumberOfPlaces">
                            <Form.Label>Number of Places</Form.Label>
                                <Form.Select defaultValue="">
                                {
                                    numberOfPlaces.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* COLOR */}
                        <Form.Group as={Col} controlId="PublishColor">
                            <Form.Label>Color</Form.Label>
                                <Form.Select defaultValue="">
                                {
                                    colors.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    {/* Dimensions */}
                    <Row className="mb-3">
                    </Row>
                    
                    {/* Maintenance */}
                    <br/><hr/>
                    <h2>Maintenance</h2>
                    <Row className="mb-3">
                        {/* MILEAGE */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Mileage(in km)</Form.Label>
                            <Form.Control type="number" placeholder="" required />
                        </Form.Group>
                        {/* PICTUREP */}
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Mileage Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>

                    {/* Car Options */}
                    <br/><hr/>
                    <h2>Car Options</h2>
                    <Row className="mb-3">
                        {/* OPTIONS */}
                        <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            {
                                options.map((el) =>
                                <Form.Check type="checkbox" label={el} value={el} />)
                                
                            }
                        </Form.Group>
                    </Row>

                    {/* Add Pictures */}
                    <br/><hr/>
                    <h2>Add Pictures</h2>
                    <Row className="mb-3">
                        {/* Front End */}
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Front End</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        {/* Back End */}
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Back End</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        {/* Left Side */}
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Left Side</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        {/* Right Side */}
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Right Side</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>
                    
                    {/* Announcement */}
                    <br/><hr/>
                    <h2>Announcement</h2>
                    {/* DESCRIPTION */}
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder=""/>
                    </Form.Group>
                    <Row className="mb-3">  
                        {/* DELIVERY */}
                        <Form.Group as={Col} controlId="PublishDelivery">
                            <Form.Label>Delivery</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    deliveries.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* PRICE OPTIONS */}
                        <Form.Group as={Col} controlId="PublishDelivery">
                            <Form.Label>Price Options</Form.Label>
                            <Form.Select defaultValue="">
                                {
                                    priceOptions.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* PRICE */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="" required />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br/>
                <br/>
                <br/>
                <form action="/verkoop" method="POST" enctype="multipart/form-data">
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
                    <div id="Opties">
                        <h2>Opties</h2>
                        <br/>
                        <div>
                            <input type="checkbox" value="4x4" name="opties[]"/><br/>
                            <input type="checkbox" value="ABS" name="opties[]"/><br/>
                            <input type="checkbox" value="Adaptieve lichten" name="opties[]"/><br/>
                            <input type="checkbox" value="Adaptive Cruise Control" name="opties[]"/><br/>
                            <input type="checkbox" value="Airbags" name="opties[]"/><br/>
                            <input type="checkbox" value="Airconditioning" name="opties[]"/><br/>
                            <input type="checkbox" value="Alarm" name="opties[]" /><br/>
                            <input type="checkbox" value="Lederen bekleding" name="opties[]" /><br/>
                            <input type="checkbox" value="Bluetooth" name="opties[]" /><br/>
                            <input type="checkbox" value="Boordcomputer" name="opties[]"/><br/>
                            <input type="checkbox" value="Centrale vergrendeling" name="opties[]"/><br/>
                            <input type="checkbox" value="Climate control" name="opties[]"/><br/>
                            <input type="checkbox" value="Cruise Control" name="opties[]" /><br/>
                            <input type="checkbox" value="Dodehoekdetectie" name="opties[]"/>
                        </div>
                        <div>
                            <input type="checkbox" value="Elektrische koffer" name="opties[]"/><br/>
                            <input type="checkbox" value="Elektrische buitenspiegels" name="opties[]"/><br/>
                            <input type="checkbox" value="Elektrische stoelverstelling" name="opties[]"/><br/>
                            <input type="checkbox" value="Electronic Stability Program" name="opties[]"/><br/>
                            <input type="checkbox" value="Elektrische ramen" name="opties[]"/><br/>
                            <input type="checkbox" value="Emergency brake assist" name="opties[]"/><br/>
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
