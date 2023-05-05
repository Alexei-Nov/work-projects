import React from 'react'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import './form.css'

export default function Form({ create, posts, title }) {
    const [item, setItem] = useState({ text: '' })
    const addNewItem = (e) => {
        e.preventDefault()
        const newItem = {
            ...item,
            id: Date.now(),
        }
        create(newItem)
        setItem({ text: '' })
    }

    return (
        <form className='form'>
            <div className="container">
                <div className='title'>{title}</div>
                <div className="form__wrapper">
                    <div className="form__body">
                        <Input
                            onChange={e => setItem({ ...item, text: e.target.value })}
                            value={item.text}
                            type='text'
                            placeholder="Введите текст" />
                    </div>
                    <div className="form__btns">
                        <Button onClick={addNewItem}>Добавить</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}
