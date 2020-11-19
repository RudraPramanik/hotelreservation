import React, { Component } from 'react';
import items from './data'
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price: 0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    //get data

    componentDidMount(){
        //this.getdata
        let rooms =this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item =>item.price))
        let maxSize = Math.max(...rooms.map(item =>item.size))
    
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
             loading:false,
             price:maxPrice,
             maxPrice,
             maxSize
            })     
              
    }
     
    formatData(items){
       let tempItems = items.map(item=>{
        let id = item.sys.id
        let images = item.fields.images.map(image =>image.fields.file.url);

        let room = {...item.fields, images, id}
        return room;
       })
       return tempItems
    }
    getRoom = (slug)=>{
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find( room => room.slug ===slug);
                     return room;
    };

 //////handle for filter//////

    handleChange = event =>{
        // const type = event.target.type;
        const target = event.target
        const value = target.type === 'checkbox'? target.checked : target.value
        const name = event.target.name;
        // whatever name getting back check that in state..set = whatever currently have/
        //not setstate one by one,anything we getting back

        this.setState({
            [name]:value
        },this.filterRooms)
        
    }

       //filterRooms grab the value from state

       filterRooms = () =>{
           let {
               price, size, minSize, maxSize, pets, breakfast,
            capacity, handleChange,rooms, type } = this.state ;
//////all the rooms

            let tempRooms = [...rooms]

////////transform values
            
            capacity = parseInt(capacity)
            price = parseInt(price)
////////filter by type/////
            if( type !== 'all'){
                tempRooms = tempRooms.filter( room => room.type ===type)
            }
////////filter by capacity     
            if( capacity !== 1 ){
                tempRooms = tempRooms.filter( room => room.capacity >= capacity)
            }
////////filter by price

             tempRooms = tempRooms.filter( room =>room.price <=price)

/////////breakfast
           
             if(breakfast){
                 tempRooms = tempRooms.filter( room => room.breakfast === true )
             }

/////////////pets

             if(pets){
                tempRooms = tempRooms.filter( room => room.pets === true )
            }

/////////change state

            this.setState({sortedRooms:tempRooms})

        
    }

    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state,
             getRoom:this.getRoom, 
            handleChange:this.handleChange}}>
            {this.props.children}        
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            { value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {RoomConsumer, RoomContext, RoomProvider}


