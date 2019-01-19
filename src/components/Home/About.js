import React from 'react'

export default () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <h2 className="serif bold">More about us</h2>
          <div className="number-bullet">
            <div className="number">
              1.
            </div>
            <p>Riplo is a student-run freelance web development company centered at the University of Pennsylvania. Our members come from top universities and specialize in full-stack development.</p>
          </div>

          <div className="number-bullet">
            <div className="number">
              2.
            </div>
            <p>Riplo delivers everything from complex web applications to mobile apps to static websites. Our developers work with a variety of clients at all stages of business-maturity.</p>
          </div>

          <div className="number-bullet">
            <div className="number">
              3.
            </div>
            <p>Our team is actively looking to bring on more clients. If you have an idea for an app or need help on an existing project, please get in touch.</p>
          </div>
        </div>
        <div className="d-none d-md-block col-md-4 col-lg-3">
          <img src="/img/riplo-construct.svg" alt="Riplo" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
)
