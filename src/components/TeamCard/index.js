// Write your code here

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
