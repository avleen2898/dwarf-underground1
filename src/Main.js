import React from 'react'

import Article from './Article'
import Aside from './Aside'
import MoreArticles from './MoreArticles';

const Main = () =>{
    return (
        <main className="expanded row">
            <Article />
            <Aside />
            <MoreArticles />
      </main>
    )
}

export default Main;