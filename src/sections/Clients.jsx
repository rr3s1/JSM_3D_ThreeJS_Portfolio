import React from 'react'
import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">
                Hear from my clients
            </h3>
            <div className="client-container">
                 {clientReviews.map(({id, name, review, img, position}) => (
                     <div key={id} className="client-review">
                         <div>
                             <p className="text-white font-light">{review}</p>
                             <div className="client-content">
                                 <div className="flex gap-3">
                                     <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                                     <div className="flex flex-col">
                                         <p className="font-semibold text-white-800">{name}</p>
                                         <p className="text-white-500 md:text-base text-sm">{position}</p>
                                     </div>
                                 </div>
                                 <div className="flex self-end intes-center gap-2">
                                     {Array.from({length: 5}).map((_, index) => (
                                         <img key={index} src="/assets/star.png" alt="star" className="h-5 w-5"/>
                                     ))}
                                 </div>
                             </div>
                         </div>
                     </div>
                 ))}
            </div>
        </section>
    )
}
export default Clients
