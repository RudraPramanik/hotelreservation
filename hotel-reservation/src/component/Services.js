import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export class Services extends Component {

    state={
        services :[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, reiciendis"
            },
            {
                icon:<FaHiking/>,
                title:"endless hikings",
                info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, reiciendis"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttleVan",
                info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, reiciendis"
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, reiciendis"
            }

        ]
    }
    render() {
        return (
            <section className="services">
            <Title title="services"/>  
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
    }
}

export default Services
