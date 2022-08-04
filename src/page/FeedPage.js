import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import TodoList from '../components/TodoList'

const FeedPage = () => {

  const [data, setData] = React.useState([])

  return (
    <div className='container vh-100 p-2'>
        <Header/>
        <Input todos={data} setData={setData}/>
        <TodoList todos={data}/>
    </div>
  )
}


export default FeedPage