import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updatedData = fetchData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul>
        {teamsData.map(team => (
          <TeamCard key={team.id} teamData={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#FFFFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
