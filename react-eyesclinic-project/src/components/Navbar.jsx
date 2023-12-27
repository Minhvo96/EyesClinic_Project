import React from 'react'

export default function Navbar() {

    return (
         <>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Denta<span>Care</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="services.html" className="nav-link">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="doctors.html" className="nav-link">
                                    Doctors
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item cta">
                                <a
                                    href="contact.html"
                                    className="nav-link"
                                    data-toggle="modal"
                                    data-target="#modalRequest"
                                >
                                    <span>Make an Appointment</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}
            <section className="home-slider owl-carousel">
                <div
                    className="slider-item"
                    style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
                >
                    <div className="overlay" />
                    <div className="container">
                        <div
                            className="row slider-text align-items-center"
                            data-scrollax-parent="true"
                        >
                            <div
                                className="col-md-6 col-sm-12 ftco-animate"
                                data-scrollax=" properties: { translateY: '70%' }"
                            >
                                <h1
                                    className="mb-4"
                                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                                >
                                    Modern Dentistry in a Calm and Relaxed Environment
                                </h1>
                                <p
                                    className="mb-4"
                                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                                >
                                    A small river named Duden flows by their place and supplies it
                                    with the necessary regelialia.
                                </p>
                                <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Make an Appointment
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="slider-item"
                    style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
                >
                    <div className="overlay" />
                    <div className="container">
                        <div
                            className="row slider-text align-items-center"
                            data-scrollax-parent="true"
                        >
                            <div
                                className="col-md-6 col-sm-12 ftco-animate"
                                data-scrollax=" properties: { translateY: '70%' }"
                            >
                                <h1
                                    className="mb-4"
                                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                                >
                                    Modern Achieve Your Desired Perfect Smile
                                </h1>
                                <p className="mb-4">
                                    A small river named Duden flows by their place and supplies it
                                    with the necessary regelialia.
                                </p>
                                <p>
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Make an Appointment
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-intro">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-3 color-1 p-4">
                            <h3 className="mb-4">Emergency Cases</h3>
                            <p>A small river named Duden flows by their place and supplies</p>
                            <span className="phone-number">+ (123) 456 7890</span>
                        </div>
                        <div className="col-md-3 color-2 p-4">
                            <h3 className="mb-4">Opening Hours</h3>
                            <p className="openinghours d-flex">
                                <span>Monday - Friday</span>
                                <span>8:00 - 19:00</span>
                            </p>
                            <p className="openinghours d-flex">
                                <span>Saturday</span>
                                <span>10:00 - 17:00</span>
                            </p>
                            <p className="openinghours d-flex">
                                <span>Sunday</span>
                                <span>10:00 - 16:00</span>
                            </p>
                        </div>
                        <div className="col-md-6 color-3 p-4">
                            <h3 className="mb-2">Make an Appointment</h3>
                            <form action="#" className="appointment-form">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down" />
                                                </div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Department</option>
                                                    <option value="">Teeth Whitening</option>
                                                    <option value="">Teeth CLeaning</option>
                                                    <option value="">Quality Brackets</option>
                                                    <option value="">Modern Anesthetic</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="icon-user" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="appointment_name"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="icon-paper-plane" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="appointment_email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="ion-ios-calendar" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control appointment_date"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="ion-ios-clock" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control appointment_time"
                                                placeholder="Time"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <div className="icon">
                                                <span className="icon-phone2" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Make an Appointment"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-services">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2 className="mb-2">Our Service Keeps you Smile</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-tooth-1" />
                                </div>
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Teeth Whitening</h3>
                                    <p>
                                        Even the all-powerful Pointing has no control about the blind
                                        texts it is an almost unorthographic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-dental-care" />
                                </div>
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Teeth Cleaning</h3>
                                    <p>
                                        Even the all-powerful Pointing has no control about the blind
                                        texts it is an almost unorthographic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-tooth-with-braces" />
                                </div>
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Quality Brackets</h3>
                                    <p>
                                        Even the all-powerful Pointing has no control about the blind
                                        texts it is an almost unorthographic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center">
                                    <span className="flaticon-anesthesia" />
                                </div>
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Modern Anesthetic</h3>
                                    <p>
                                        Even the all-powerful Pointing has no control about the blind
                                        texts it is an almost unorthographic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-wrap mt-5">
                    <div className="row d-flex no-gutters">
                        <div
                            className="col-md-6 img"
                            style={{ backgroundImage: "url(images/about-2.jpg)" }}
                        ></div>
                        <div className="col-md-6 d-flex">
                            <div className="about-wrap">
                                <div className="heading-section heading-section-white mb-5 ftco-animate">
                                    <h2 className="mb-2">Dentacare with a personal touch</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                                <div className="list-services d-flex ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-check2" />
                                    </div>
                                    <div className="text">
                                        <h3>Well Experience Dentist</h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-services d-flex ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-check2" />
                                    </div>
                                    <div className="text">
                                        <h3>High Technology Facilities</h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-services d-flex ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-check2" />
                                    </div>
                                    <div className="text">
                                        <h3>Comfortable Clinics</h3>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2 className="mb-3">Meet Our Experience Dentist</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia. It is a paradisematic country, in which
                                roasted parts of sentences
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div
                                    className="img mb-4"
                                    style={{ backgroundImage: "url(images/person_5.jpg)" }}
                                />
                                <div className="info text-center">
                                    <h3>
                                        <a href="teacher-single.html">Tom Smith</a>
                                    </h3>
                                    <span className="position">Dentist</span>
                                    <div className="text">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia
                                        </p>
                                        <ul className="ftco-social">
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div
                                    className="img mb-4"
                                    style={{ backgroundImage: "url(images/person_6.jpg)" }}
                                />
                                <div className="info text-center">
                                    <h3>
                                        <a href="teacher-single.html">Mark Wilson</a>
                                    </h3>
                                    <span className="position">Dentist</span>
                                    <div className="text">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia
                                        </p>
                                        <ul className="ftco-social">
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div
                                    className="img mb-4"
                                    style={{ backgroundImage: "url(images/person_7.jpg)" }}
                                />
                                <div className="info text-center">
                                    <h3>
                                        <a href="teacher-single.html">Patrick Jacobson</a>
                                    </h3>
                                    <span className="position">Dentist</span>
                                    <div className="text">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia
                                        </p>
                                        <ul className="ftco-social">
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
                            <div className="staff">
                                <div
                                    className="img mb-4"
                                    style={{ backgroundImage: "url(images/person_8.jpg)" }}
                                />
                                <div className="info text-center">
                                    <h3>
                                        <a href="teacher-single.html">Ivan Dorchsner</a>
                                    </h3>
                                    <span className="position">System Analyst</span>
                                    <div className="text">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia
                                        </p>
                                        <ul className="ftco-social">
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li className="ftco-animate">
                                                <a href="#">
                                                    <span className="icon-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  mt-5 justify-conten-center">
                        <div className="col-md-8 ftco-animate">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero
                                accusantium sunt sit aliquam ipsum molestias autem perferendis,
                                incidunt cumque necessitatibus cum amet cupiditate, ut accusamus.
                                Animi, quo. Laboriosam, laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="ftco-section ftco-counter img"
                id="section-counter"
                style={{ backgroundImage: "url(images/bg_1.jpg)" }}
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3 aside-stretch py-5">
                            <div className=" heading-section heading-section-white ftco-animate pr-md-4">
                                <h2 className="mb-3">Achievements</h2>
                                <p>
                                    A small river named Duden flows by their place and supplies it
                                    with the necessary regelialia.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-9 py-5 pl-md-5">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18">
                                        <div className="text">
                                            <strong className="number" data-number={14}>
                                                0
                                            </strong>
                                            <span>Years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18">
                                        <div className="text">
                                            <strong className="number" data-number={4500}>
                                                0
                                            </strong>
                                            <span>Qualified Dentist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18">
                                        <div className="text">
                                            <strong className="number" data-number={4200}>
                                                0
                                            </strong>
                                            <span>Happy Smiling Customer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18">
                                        <div className="text">
                                            <strong className="number" data-number={320}>
                                                0
                                            </strong>
                                            <span>Patients Per Year</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2 className="mb-3">Our Best Pricing</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ftco-animate">
                            <div className="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 className="mb-4">Basic</h3>
                                    <p>
                                        <span className="price">$24.50</span>{" "}
                                        <span className="per">/ session</span>
                                    </p>
                                </div>
                                <ul>
                                    <li>Diagnostic Services</li>
                                    <li>Professional Consultation</li>
                                    <li>Tooth Implants</li>
                                    <li>Surgical Extractions</li>
                                    <li>Teeth Whitening</li>
                                </ul>
                                <p className="button text-center">
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary px-4 py-3"
                                    >
                                        Order now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 className="mb-4">Standard</h3>
                                    <p>
                                        <span className="price">$34.50</span>{" "}
                                        <span className="per">/ session</span>
                                    </p>
                                </div>
                                <ul>
                                    <li>Diagnostic Services</li>
                                    <li>Professional Consultation</li>
                                    <li>Tooth Implants</li>
                                    <li>Surgical Extractions</li>
                                    <li>Teeth Whitening</li>
                                </ul>
                                <p className="button text-center">
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary px-4 py-3"
                                    >
                                        Order now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="pricing-entry active pb-5 text-center">
                                <div>
                                    <h3 className="mb-4">Premium</h3>
                                    <p>
                                        <span className="price">$54.50</span>{" "}
                                        <span className="per">/ session</span>
                                    </p>
                                </div>
                                <ul>
                                    <li>Diagnostic Services</li>
                                    <li>Professional Consultation</li>
                                    <li>Tooth Implants</li>
                                    <li>Surgical Extractions</li>
                                    <li>Teeth Whitening</li>
                                </ul>
                                <p className="button text-center">
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary px-4 py-3"
                                    >
                                        Order now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <div className="pricing-entry pb-5 text-center">
                                <div>
                                    <h3 className="mb-4">Platinum</h3>
                                    <p>
                                        <span className="price">$89.50</span>{" "}
                                        <span className="per">/ session</span>
                                    </p>
                                </div>
                                <ul>
                                    <li>Diagnostic Services</li>
                                    <li>Professional Consultation</li>
                                    <li>Tooth Implants</li>
                                    <li>Surgical Extractions</li>
                                    <li>Teeth Whitening</li>
                                </ul>
                                <p className="button text-center">
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary px-4 py-3"
                                    >
                                        Order now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in
                                </p>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                />
                                                <input
                                                    type="submit"
                                                    defaultValue="Subscribe"
                                                    className="submit px-3"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2 className="mb-2">Testimony</h2>
                            <span className="subheading">Our Happy Customer Says</span>
                        </div>
                    </div>
                    <div className="row justify-content-center ftco-animate">
                        <div className="col-md-8">
                            <div className="carousel-testimony owl-carousel ftco-owl">
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div
                                            className="user-img mb-5"
                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                        >
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text text-center">
                                            <p className="mb-5">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts it is an almost unorthographic life One day
                                                however a small line of blind text by the name of Lorem
                                                Ipsum decided to leave for the far World of Grammar.
                                            </p>
                                            <p className="name">Dennis Green</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div
                                            className="user-img mb-5"
                                            style={{ backgroundImage: "url(images/person_2.jpg)" }}
                                        >
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text text-center">
                                            <p className="mb-5">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Dennis Green</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div
                                            className="user-img mb-5"
                                            style={{ backgroundImage: "url(images/person_3.jpg)" }}
                                        >
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text text-center">
                                            <p className="mb-5">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Dennis Green</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div
                                            className="user-img mb-5"
                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                        >
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text text-center">
                                            <p className="mb-5">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Dennis Green</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div
                                            className="user-img mb-5"
                                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                                        >
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text text-center">
                                            <p className="mb-5">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Dennis Green</p>
                                            <span className="position">System Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-gallery">
                <div className="container-wrap">
                    <div className="row no-gutters">
                        <div className="col-md-3 ftco-animate">
                            <a
                                href="#"
                                className="gallery img d-flex align-items-center"
                                style={{ backgroundImage: "url(images/gallery-1.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-search" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a
                                href="#"
                                className="gallery img d-flex align-items-center"
                                style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-search" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a
                                href="#"
                                className="gallery img d-flex align-items-center"
                                style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-search" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a
                                href="#"
                                className="gallery img d-flex align-items-center"
                                style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
                            >
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-search" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2 className="mb-2">Latest Blog</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ftco-animate">
                            <div className="blog-entry">
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                                ></a>
                                <div className="text d-flex py-4">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">Sep. 20, 2018</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <div className="desc pl-3">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="blog-entry" data-aos-delay={100}>
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                                ></a>
                                <div className="text d-flex py-4">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">Sep. 20, 2018</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <div className="desc pl-3">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="blog-entry" data-aos-delay={200}>
                                <a
                                    href="blog-single.html"
                                    className="block-20"
                                    style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                                ></a>
                                <div className="text d-flex py-4">
                                    <div className="meta mb-3">
                                        <div>
                                            <a href="#">Sep. 20, 2018</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="icon-chat" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <div className="desc pl-3">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-quote">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pr-md-5 aside-stretch py-5 choose">
                            <div className="heading-section heading-section-white mb-5 ftco-animate">
                                <h2 className="mb-2">
                                    DentaCare Procedure &amp; High Quality Services
                                </h2>
                            </div>
                            <div className="ftco-animate">
                                <p>
                                    Even the all-powerful Pointing has no control about the blind
                                    texts it is an almost unorthographic life One day however a small
                                    line of blind text by the name of Lorem Ipsum decided to leave for
                                    the far World of Grammar. Because there were thousands of bad
                                    Commas, wild Question Marks and devious Semikoli
                                </p>
                                <ul className="un-styled my-5">
                                    <li>
                                        <span className="icon-check" />
                                        Consectetur adipisicing elit
                                    </li>
                                    <li>
                                        <span className="icon-check" />
                                        Adipisci repellat accusamus
                                    </li>
                                    <li>
                                        <span className="icon-check" />
                                        Tempore reprehenderit vitae
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 py-5 pl-md-5">
                            <div className="heading-section mb-5 ftco-animate">
                                <h2 className="mb-2">Get a Free Quote</h2>
                            </div>
                            <form action="#" className="ftco-animate">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Website"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name=""
                                                id=""
                                                cols={30}
                                                rows={7}
                                                className="form-control"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                defaultValue="Get a Quote"
                                                className="btn btn-primary py-3 px-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div id="map" />
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">DentaCare.</h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
                                <li className="ftco-animate">
                                    <a href="#">
                                        <span className="icon-twitter" />
                                    </a>
                                </li>
                                <li className="ftco-animate">
                                    <a href="#">
                                        <span className="icon-facebook" />
                                    </a>
                                </li>
                                <li className="ftco-animate">
                                    <a href="#">
                                        <span className="icon-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Quick Links</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 pr-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Recent Blog</h2>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(images/image_1.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="icon-calendar" /> Sept 15, 2018
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-person" /> Admin
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-chat" /> 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(images/image_2.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="icon-calendar" /> Sept 15, 2018
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-person" /> Admin
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-chat" /> 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Office</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker" />
                                            <span className="text">
                                                203 Fake St. Mountain View, San Francisco, California, USA
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon icon-phone" />
                                                <span className="text">+2 392 3929 210</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="icon icon-envelope" />
                                                <span className="text">info@yourdomain.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with{" "}
                                <i className="icon-heart" aria-hidden="true" /> by{" "}
                                <a href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* loader */}
            <div id="ftco-loader" className="show fullscreen">
              
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="modalRequest"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modalRequestLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalRequestLabel">
                                Make an Appointment
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="form-group">
                                    {/* <label for="appointment_name" class="text-black">Full Name</label> */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="appointment_name"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <label for="appointment_email" class="text-black">Email</label> */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="appointment_email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {/* <label for="appointment_date" class="text-black">Date</label> */}
                                            <input
                                                type="text"
                                                className="form-control appointment_date"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {/* <label for="appointment_time" class="text-black">Time</label> */}
                                            <input
                                                type="text"
                                                className="form-control appointment_time"
                                                placeholder="Time"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label for="appointment_message" class="text-black">Message</label> */}
                                    <textarea
                                        name=""
                                        id="appointment_message"
                                        className="form-control"
                                        cols={30}
                                        rows={10}
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Make an Appointment"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
