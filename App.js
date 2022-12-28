import React from "react"
import Nav from "./components/Nav"
import Destination from "./components/Destination"
import data from "./data"

export default function App(){
    const travelData = data.map(item => {
        return (<Destination 
                    key = {item.title}
                    item = {item}
                    image = {item.image}
                    location = {item.location}
                    map = {item.googleMapsUrl}
                    title = {item.title}
                    start = {item.startDate}
                    end = {item.endDate}
                    description = {item.description}    
                />
        )
        })
    return (
        <div>
            <Nav />
            <section className="travelData">
                {travelData}
            </section>
        </div>
    )
}



// export default function App() {
//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 item={item}
//             />
//         )
//     })        
    
//             // <Hero />
//     return (
//         <div>
//             <Navbar />
//             <section className="cards-list">
//                 {cards}
//             </section>
//         </div>
//     )
// }