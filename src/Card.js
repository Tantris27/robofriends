import React from 'react';

const Card = ({ name, email, id }) => {
  // const { name, email, id } = props
  return (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <h1>RobotFriend</h1>
    <div>
      <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  </div>
  )
}

export default Card