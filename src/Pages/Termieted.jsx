import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'

export default function Teams() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h1>Termineted</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}
