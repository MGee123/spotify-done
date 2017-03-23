import React from 'react'
import _ from 'lodash'
import Albums from './albums'

export default (props) => {
  return (
    <div>
      
      <ol>
        {_.map(props.albums, ((album) => {
          return <Albums album={album} />
        }))}
      </ol>
      <p> Kate Bush</p>
      <button onClick={() => props.get()}>get albums</button>
    </div>
  )
}

