// src/pages/ChooseRole.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChooseRole = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Select Login Type</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Admin Login
        </button>
        <button
          onClick={() => navigate('/login-member')}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Member Login
        </button>
      </div>
    </div>
  )
}

export default ChooseRole
