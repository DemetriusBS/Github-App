'use strict'

import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars0.githubusercontent.com/u/59734496?v=4' />
        <h1 className='username'>
            <a href='github.com/DemetriusBS'>Demetrius Batista dos Santos</a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: 20</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
        </ul>
    </div>
)

export default UserInfo