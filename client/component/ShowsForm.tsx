import { FormEvent, ChangeEvent, useState } from 'react'
import { Show } from '../../common/show'

// interface Show {
//   id?: number
//   host: string
//   host: string
//   img: string
//   genre: string
//   description: string
// }

function DisplayShows() {
  const [showies, showIt] = useState([] as Show[])
  const [formData, setFormData] = useState({
    name: '',
    host: '',
    img: '',
    genre: '',
    description: '',
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <h1>Here is some shows</h1>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="host">host: </label>
            <input
              id="host"
              name="host"
              value={formData.host}
              onChange={changeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="genre">genre: </label>
            <input
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={changeHandler}
            ></input>
          </div>
        </form>
      </div>
    </>
  )
}
