import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className='home__row'>
                <Product 
                    id="5406677"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    rating={5}
                    />
                <Product 
                    id="3209955"
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price={239.00}
                    image="https://m.media-amazon.com/images/I/61S1+6AY13L._AC_UY218_.jpg"
                    rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49 Curved LED Digital Watch"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
                    />
                      <Product 
                    id="4783850"
                    title="Samsung Double QHD CRG9 Series 49-Inch Curved Gaming Monitor (LC49RG90SSNXZA), Black (Renewed)"
                    price={1139.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81CBGbWDmvL._AC_UY218_.jpg"
                    />
                </div>

                <div className='home__row'>
                <Product 
                    id="5806365"
                    title="Samsung DG44-01006A Range Regulator-Outer"
                    price={88.60}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71FhYfK-5CL._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
