import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title'

//get unique value
const getUnique = (items, value ) =>{
    return [...new Set(items.map(item =>item[value]))]
}
export default function RoomFilter({rooms}) {

    const context = useContext(RoomContext);
    console.log(context);
    const { 
        maxPrice,minPrice,price, size, minSize, maxSize, pets, breakfast,
            capacity, handleChange, type } =context;
////////get unique types//////

       let types = getUnique( rooms, 'type')

///////add all to types/////

       types = ['all',...types]

////////map to jsx ////////
     
      types = types.map(( item,index ) =>{
          return <option value={item} key={index}>{item}</option>
      })
////////get unique capacity//////

      let people = getUnique( rooms, 'capacity')
      people = people.map((item,index) =>{
          return <option value={item} key={index}>{item}</option>
      })
    return (
        <section className="filter-container">
            <Title title="search for rooms"/>
                <form className="filter-form">
                 {/*select form*/}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select 
                         name="type" 
                         value={type} 
                         id="type" 
                         className="form-control"
                         onChange={handleChange}>{types}</select>
                    </div>   
                    {/*select form*/}
                    {/*capacity:guests*/}                              
                     <div className="form-group">
                        <label htmlFor="capacity">guests</label>
                        <select 
                         name="capacity" 
                         value={capacity} 
                         id="capacity" 
                         className="form-control"
                         onChange={handleChange}>{people}</select>
                    </div>
                    {/*capacity:Guests*/}
                    {/*room price*/}
                    <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input type="range" name="price" min={minPrice} 
                        max={maxPrice} id="price" value={price} 
                        onChange={handleChange} className="form-control"/>
                    </div>
                    {/*room price*/}
                    {/*size*/}
                    {/* <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-input">

                        <input type="number"
                         name="minSize"
                         id="size" 
                         value={minSize} 
                         onChange={handleChange}
                         className="size-input"/>

                        <input type="number"
                         name="maxSize"
                         id="size" 
                         value={maxSize} 
                         onChange={handleChange}
                         className="size-input"/>
                    </div>
                    </div> */}
                    {/*size*/}
                    {/*extras*/}
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                            type="checkbox" 
                            name="breakfast"
                            id="breakfast" 
                            checked={breakfast}
                            onChange={handleChange}
                            />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                            type="checkbox" 
                            name="pets"
                            id="pets" 
                            checked={pets}
                            onChange={handleChange}
                            />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>

                    {/*extras*/}

                </form>
        </section>
    )
}
