import React, { useState } from 'react'
import './posts.css';
import Item from '../Item/Item';

export default function Posts({ remove, posts, title }) {



    return (
        <div className='posts'>
            <div className='container'>
                <div className='title'>{title}</div>
                <div className='posts__body'>
                    {posts.map((post, index) =>
                        <Item remove={remove} num={index} post={post} key={post.id} />
                    )}
                </div>
            </div>
        </div>
    );
}

