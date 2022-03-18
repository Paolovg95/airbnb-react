import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./cardsData"


export default function App() {
    const cardElements = cardsData.map(card => {

      return <Card
        {...card} // ES6 Object Literals
        />
    })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}
