import React from 'react'
import { useState } from 'react'
import './input.css'

export default function Input({ ...props }) {
    return (
        <input {...props} className='input' ></input>
    )
}
