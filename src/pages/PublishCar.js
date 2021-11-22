import {React, useRef, useState} from 'react';
import {Form,Button, Row, Col, Alert} from 'react-bootstrap';
import "../layout/PublishCar.css";
import { auth, db, store } from "../firebase/firebase.js";
import AnnouncementModel from '../model/AnnouncementModel';
import { v4 as uuid } from 'uuid';

function PublishCar() {
    const [error, setError] = useState("")

    {/* Data Lists */}
    const brands = ['TVR','Mclaren','Mercedes', 'Ferrari', 'Ford']
    const models = ['TVR Speed 12','Mclaren F1','Mercedes W124 E500', 'Ferrari F40', 'Ford GT40']
    const constructionYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
    const fuels = ['Gasoline','Diesel','Electric','Hybrid','LPG']
    const engines = []
    const emissionNorms = ['euro 1','euro 2','euro 3','euro 4','euro 5','euro 6']
    const gearboxes = ['Automatic','Manual']
    const transmissions = ['Propulsion','traction','4 drive wheels']
    const bodyworks = ['Monospace','Break','Berline','City car','Monovolume','Cabriolet','Coupé','Compact','SUV or off road cars']
    const numberOfPlaces = ['2','3','4','5','6']
    const colors = ['Red','Beige','Purple','Blue','Silver','Green','Brown','White','Black']
    const deliveries = ['pick up','send']
    const priceOptions = ['Asking price','Offer','Exchange','Free']

    {/* Refs */}
    const brand = useRef();
    const model = useRef();
    const constructionYear = useRef();
    const fuel = useRef();
    const engine = useRef();
    const emissionNorm = useRef();
    const gearboxe = useRef();
    const transmission = useRef();
    const emptyWeight = useRef();
    const consumption = useRef();
    const bodywork = useRef();
    const numberOfPlace = useRef();
    const color = useRef();
    const mileage = useRef();
    
    const description = useRef();
    const delivery = useRef();
    const priceOption = useRef();
    const price = useRef();

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function handleChange(e) {
      setFile(e.target.files[0]);
    }
    function handleUpload(e, id) {
      e.preventDefault();
      const ref = store.ref(`/images/${id}/${file.name}`);
      const uploadTask = ref.put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref
          .getDownloadURL()
          .then((url) => {
              setURL(url);
          });
      });
    }
    

    async function handleSubmit(e) {
        const id = uuid();
        e.preventDefault()
        handleUpload(e, id)
        
        let Announcement = new AnnouncementModel(
            id,
            brand.current.value,
            model.current.value,
            constructionYear.current.value,
            fuel.current.value,
            engine.current.value,
            emissionNorm.current.value,
            gearboxe.current.value,
            transmission.current.value,
            emptyWeight.current.value,
            consumption.current.value,
            bodywork.current.value,
            numberOfPlace.current.value,
            color.current.value,
            mileage.current.value,
            auth.currentUser.uid,
            url,
            description.current.value,
            delivery.current.value,
            priceOption.current.value,
            price.current.value
        )  

        try {
            setError("")
            await db.collection("announcement").doc(id).set(Announcement.toMap())
        } catch (err) {
            console.error(err)
        }
    }
  
    return (
        <div className="PublishCar">
            <section>
                <h1>Place Announcement</h1>
                <Form onSubmit={handleSubmit}>
                    { /*   @csrf */ }
                    {/* MODEL */}
                    <h2>Model</h2>
                    <Row className="mb-3">
                        {/* BRAND */}
                        <Form.Group as={Col} controlId="PublishBrand">
                            <Form.Label>Brand*</Form.Label>
                            <Form.Select ref={brand} required>
                                {
                                    brands.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* MODEL */}
                        <Form.Group as={Col} controlId="PublishModel">
                            <Form.Label>Model*</Form.Label>
                            <Form.Select ref={model} required>
                                {
                                    models.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* YEAR */}
                        <Form.Group as={Col} controlId="PublishConstructionYear">
                            <Form.Label>Construction Year*</Form.Label>
                            <Form.Select ref={constructionYear} required>
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
                            <Form.Label>Fuel*</Form.Label>
                            <Form.Select ref={fuel} required>
                                {
                                    fuels.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* ENGINE */}
                        <Form.Group as={Col} controlId="PublishEngine">
                            <Form.Label>Engine</Form.Label>
                            <Form.Select ref={engine} >
                                {
                                    engines.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* EMISSION NORMS */}
                        <Form.Group as={Col} controlId="PublishEngine">
                            <Form.Label>Emission Norms*</Form.Label>
                            <Form.Select ref={emissionNorm} required>
                                {
                                    emissionNorms.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* GEARBOX */}
                        <Form.Group as={Col} controlId="PublishGearbox">
                            <Form.Label>Gearbox*</Form.Label>
                            <Form.Select ref={gearboxe} required>
                                {
                                    gearboxes.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* TRANSMISSION */}
                        <Form.Group as={Col} controlId="PublishTransmission">
                            <Form.Label>Transmission*</Form.Label>
                            <Form.Select ref={transmission} required>
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
                            <Form.Control ref={emptyWeight} type="number" placeholder="example 1500"/>
                       </Form.Group>
                        {/* CONSUMPTION */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Consumption(in L)/100kg</Form.Label>
                            <Form.Control ref={consumption} type="number" placeholder="example 13"/>
                        </Form.Group>
                    </Row>

                    {/* Chassis and Bodywork */}
                    <br/><hr/>
                    <h2>Chassis and Bodywork</h2>
                    <Row className="mb-3">
                        {/* BODYWORK */}
                        <Form.Group as={Col} controlId="PublishBodywork">
                            <Form.Label>Bodywork*</Form.Label>
                                <Form.Select ref={bodywork} required>
                                {
                                    bodyworks.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* NUMBER OF PLACES */}
                        <Form.Group as={Col} controlId="PublishNumberOfPlaces">
                            <Form.Label>Number of Places</Form.Label>
                                <Form.Select ref={numberOfPlace} required>
                                {
                                    numberOfPlaces.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* COLOR */}
                        <Form.Group as={Col} controlId="PublishColor">
                            <Form.Label>Color</Form.Label>
                                <Form.Select ref={color} >
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
                            <Form.Label>Mileage(in km)*</Form.Label>
                            <Form.Control ref={mileage} type="number" placeholder="example 200000" required />
                        </Form.Group>
                    </Row>
                    
                    {/* Add Picture */}
                    <br/><hr/>
                    <h2>Add Picture</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Picture*</Form.Label>
                            <Form.Control onChange={handleChange} type="file" required/>
                        </Form.Group>
                    </Row>
                    {/* Announcement */}
                    <br/><hr/>
                    <h2>Announcement</h2>
                    {/* DESCRIPTION */}
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={description} as="textarea" rows={2} placeholder=""/>
                    </Form.Group>
                    <Row className="mb-3">  
                        {/* DELIVERY */}
                        <Form.Group as={Col} controlId="PublishDelivery">
                            <Form.Label>Delivery*</Form.Label>
                            <Form.Select ref={delivery} required>
                                {
                                    deliveries.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* PRICE OPTIONS */}
                        <Form.Group as={Col} controlId="PublishDelivery">
                            <Form.Label>Price Options*</Form.Label>
                            <Form.Select ref={priceOption} required>
                                {
                                    priceOptions.map((el) =>
                                    <option value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        {/* PRICE */}
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Price*</Form.Label>
                            <Form.Control ref={price} type="number" placeholder="" required />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" >
                        Publish
                    </Button>
                </Form>
            </section>
        </div>
    )
}

export default PublishCar;
