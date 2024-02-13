import React from 'react';

const Card = ({ Data }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col">

                                    <div class="card">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            
                                            <p id='price'> {item.price}</p>
                                            <p id='user'> <i class="fa-solid fa-check"></i> {item.user}</p>
                                            <p id='storage'> <i class="fa-solid fa-check"></i> {item.Storage}</p>
                                            <p id='project'> <i class="fa-solid fa-check"></i> {item.project}</p>
                                            <p id='access'> <i class="fa-solid fa-check"></i> {item.access}</p>
                                            <p id='private'> <i class="fa-solid fa-check"></i> {item.private}</p>
                                            <p id='phone'> <i class="fa-solid fa-check"></i> {item.phone}</p>
                                            <p id='subdomain'> <i class="fa-solid fa-check"></i> {item.subdomain}</p>
                                            <p id='report'> <i class="fa-solid fa-check"></i> {item.report}</p>
                            
                                            <button id='button'>button</button>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                     )
                })}
             </div>   
        </div>
    );

};

export default Card;