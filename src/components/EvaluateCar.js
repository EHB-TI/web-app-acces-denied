import React from 'react'
import { Form, Field } from 'react-final-form'
import { Col, Row, Card,  Container, Form as FormSelection} from 'react-bootstrap'
import "../layout/EvaluateCar.css"
import {
  Heading,
  GridItem,
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';


export default function EvaluateCar() {

const onSubmit = async values => {
    console.log(values);
    var price = values.price;
    var purchasePrice = values.price;
    
    if (values.mileage>180000){
        price= price-(price/100*30);
    }
    else if (values.purchase>5){
        price = price -(purchasePrice/100*10)
    }else if (values.purchase>=10){
        price = price -(purchasePrice/100*50)
    } else if(values.ownership == "no"){
      price = price -(purchasePrice/100*20)
    }else if(values.usage == "yes"){
      price = price -(price/100*13)
    }else if(values.usage == "yes"){
      price = price -(price/100*5)
    }else if((values.milleage/values.purchase)/12>1500){
      price = price -(price/100*3)
    }
    

    var priceResults = document.getElementById('priceResults');
            priceResults.style.display = 'block';
            priceResults.innerHTML = '';
            var results = document.createElement('div');
            results.innerHTML = '<h1 style="text-align:center">Estimated Price is:<br/></h1>' + '<h3 style="text-align:center">€' + price + '</h3>';
      
            priceResults.append(results);
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>)
const Nice = () =>(
    <div className="container-form">
       <div className="row">        
          <div className="section-heading dark-bg">
            <h2> <em>EVALUATE Your Car</em></h2>
            <img src="assets/images/line-dec.png" alt="" />
          </div>        
        </div>
 
        <Form 
          onSubmit={onSubmit}
          initialValues={{ mileage: 1, motortype: 'gasoline' }}
          validate={values => {
            const errors = {}
            if (!values.brandName) {
              errors.brandName = 'Required'
            }
            if (!values.motortype) {
              errors.motortype = 'Required'
            }
            if (values.motortype === 'gasoline') {
              if (!values.mileage) {
                errors.mileage = 'Required'
              }
            } else if (values.motortype === 'diesel') {
              if (!values.dieselTime) {
                errors.dieselTime = 'Required'
              }
            }
            return errors
          }}
        >
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form  onSubmit={handleSubmit}>
              

              <Container className="background mb-5">



              <p className="text-white">Here you can evaluate your car. Fill in the form and press "submit".</p>
              <p className="text-white"> The estimated price will be shown on the screen.</p>
                <Row>
                    <Col>
              <div>
                <label >Brand Name</label>
                <Field
                  
                  name="brandName"
                  component="input"
                  type="text"
                  placeholder='Ex: "Mercedes"'
                />
                <Error name="brandName" />
              </div>
              <Condition when="brandName" is="Mercedes"> Type
              <FormSelection.Select aria-label="type" name="type" id="type"  className ="my-2">
                  <option value="Class a" selected>Class A</option>
                  <option value="Gle">Gle</option>
                  <option value="Black series">Black Series</option>
                </FormSelection.Select>
              </Condition>
              <div>
                <label>Motortype</label>
                <div className="my-2">
                  <label>
                    <Field
                      name="motortype"
                      component="input"
                      type="radio"
                      value="gasoline"
                    />{' '}
                    Gasoline
                  </label>
                  <label>
                    <Field
                      name="motortype"
                      component="input"
                      type="radio"
                      value="diesel"
                    />{' '}
                    Diesel
                  </label>
                </div>
                <Error name="motortype" />
              </div>
              <Condition when="motortype" is="gasoline">
                <div>
                  <label>Mileage</label>
                  <Field
                      
                    name="mileage"
                    component="input"
                    type="text"
                    placeholder="Mileage (/km) "
                  />
                  <Error name="mileage" />
                </div>
              </Condition>
              <Condition when="motortype" is="diesel">
              <div>
                  <label>Mileage</label>
                  <Field
                    name="mileage"
                    component="input"
                    type="text"
                    placeholder="Mileage "
                  />
                  <Error name="mileage" />
                </div>
              </Condition>
              <div>
                  <label>Purchase Date </label>
                  <Field
                    name="purchase"
                    component="input"
                    type="text"
                    placeholder="years ago"
                  />
                  <Error name="purchase" />
                </div>
                
                <div>
                <label>Are you the first owner of the car?</label>
                <div>
                  <label>
                    <Field
                      name="ownership"
                      component="input"
                      type="radio"
                      value="yes"
                    />{' '}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="ownership"
                      component="input"
                      type="radio"
                      value="no"
                    />{' '}
                    No
                  </label>
                </div>
                <Error name="ownership" />
              </div>
              <Condition when="ownership" is="yes">

                <div>
                  <label>Price</label>
                  <Field
                    name="price"
                    component="input"
                    type="text"
                    placeholder="Price (€) "
                  />
                  <Error name="Price" />
                </div>

              </Condition>
              <Condition when="ownership" is="no">
              <div>
                  <label>Price</label>
                  <Field
                    name="price"
                    component="input"
                    type="text"
                    placeholder="Price (€) "
                  />
                  <Error name="Price" />
                </div>
              </Condition>
              <label>Are there any visible traces of usage? (ex. bruises, scratches,...)?</label>
                <div>
                  <label>
                    <Field
                      name="usage"
                      component="input"
                      type="radio"
                      value="yes"
                    />{' '}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="usage"
                      component="input"
                      type="radio"
                      value="no"
                    />{' '}
                    No
                  </label>
                </div>
                <Error name="usage" />

                <label>Is the car still under insurance?</label>
                <div>
                  <label>
                    <Field
                      name="insurance"
                      component="input"
                      type="radio"
                      value="yes"
                    />{' '}
                    Yes
                  </label>
                  <label>
                    <Field
                      name="insurance"
                      component="input"
                      type="radio"
                      value="no"
                    />{' '}
                    No
                  </label>
                </div>
                <Error name="insurance" />

              <div className="Buttons">
                <button id='button' type="submit" disabled={submitting}>
                  Submit
                </button>
                <button id='button' type="Button" onClick={form.reset} disabled={submitting}>
                  Reset
                </button>
              </div>
              </Col>
              <Col id="result">
              <pre><div id="priceResults"></div></pre>
                        </Col>
                    </Row>
                </Container>
            </form>
          )}
        </Form>
    </div>
    
)
return(Nice())
}

