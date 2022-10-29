import React, { useState } from "react";

import '../../css/comentarios.css'


const Post = () => {

    const [comentarios] = useState([
        {
            user:'Nombre de usuario 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },
        {
            user:'Nombre de usuario 2' ,
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },
        {
            user:'Nombre de usuario 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },
        {
            user:'Nombre de usuario 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },
        {
            user:'Nombre de usuario 5',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },
        {
            user:'Nombre de usuario 6',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/1022',
        },

    ])
    return ( 
     <div>
        <section>
            <div className="container">
                <h1>Comentarios</h1>
                <div className="cards">
                    {
                        comentarios.map((card, i) => (
                        <div key= {i} className="card">
                            <h3>{card.user}</h3>
                            <p>{card.content}</p>
                            <p>{card.date}</p>
                            
                        </div>

                        ))
                    }
                    
                </div>
            </div>
        </section>
     </div>
     );
}

export default Post;