import React from 'react'

function AboutUs() {
    return (
        <section className="section section-bg" id="schedule" style={{backgroundImage: 'url(assets/images/about-fullscreen-1-1920x700.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading dark-bg">
                <h2>Read <em>About Us</em></h2>
                <img src="assets/images/line-dec.png" alt="" />
                <p>Our website will be selling used cars (“second-hand”). Unlike any other car buying website, we are targeting our customers first. Instead of letting the customer getting lost in a list of choices, this website helps the customer to find the perfect car for him. Are you looking for your first car to learn how to drive? Or maybe you have a large family and need some more space?

                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <p>Our website shows what is best for you, after answering a few questions. We will also keep the user's search data stored so we can optimize our customer's interests with A.I.</p>
                <p>Our goal is to make our application user-friendly and focus on clients who do not know cars, or car pieces. A customer will be able to find a selection of cars that match what he is looking for, without getting lost in a large assortment of cars. A seller will be able to sell a car or car parts and pieces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutUs

