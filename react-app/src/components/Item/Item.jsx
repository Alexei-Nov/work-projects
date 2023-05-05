import React from 'react'
import './item.css';
import Button from '../UI/Button/Button'

export default function Item(props) {
    return (
        <div className='item'>
            <div className='item__text'>
                <span>{props.num + 1}.</span>
                <div>{props.post.text}</div>
            </div>
            <div className='item__btns'>
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </div>
    )
}
