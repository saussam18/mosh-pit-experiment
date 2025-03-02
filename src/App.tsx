import { useState } from 'react'
import Navbar from './components/Navbar'
import TourList from './components/TourList'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">MoshPit</h1>
        <TourList />
      </main>
    </div>
  )
}

export default App
