import React from 'react';
import RoomFilter from './RoomFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading'

function RoomContainer({context}){
   const { loading, sortedRooms,rooms } = context
               if(loading){
                return <Loading/>
            }
        return(
        <div>
            hello from rooms container
            <RoomFilter rooms={rooms}/>
            {/*we passed all data from context 4.05.12*/}
            <RoomsList rooms={sortedRooms}/>
        </div>
        ) 

}
export default withRoomConsumer(RoomContainer)

// export default function Roomcontainer() {
//     return (
//         <RoomConsumer>
//         {
//             (value) => {
//                 const { loading, sortedRooms,rooms } = value
//             if(loading){
//                 return <Loading/>
//             }
//         return(
//         <div>
//             hello from rooms container
//             <RoomFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//         </div>
//         ) 
//             } 
//         }
//         </RoomConsumer>
//     )
// }
