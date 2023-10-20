import React from 'react'
import Tour from './Tour';

function Tours({ data , removeTour }) {
    return (
        <section>
            <div className='title'>
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
                <div className="tours">
                    {data.map((i) => {
                        return <Tour key={i.id}{...i} removeTour={removeTour} />       
                    })}
                </div>
            </div>
        </section>
    )
}

export default Tours;