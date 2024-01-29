import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  return (
    <div>
        <h1>Error</h1>
        <h2>error message: {error.error.message}</h2>
        <a href='/'>back</a>
    </div>
  )
}

export default Error