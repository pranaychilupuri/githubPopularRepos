import './index.css'

const RepositoryItem = props => {
  const {repositoryData} = props

  return (
    <li className="repository-card-item-container">
      <img
        src={repositoryData.imageUrl}
        className="card-item-image"
        alt={repositoryData.name}
      />
      <h1 className="card-item-name">{repositoryData.name}</h1>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="stats-icon"
          alt="stars"
        />
        <p className="stats-text">{repositoryData.starsCount} stars</p>
      </div>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="stats-icon"
          alt="forks"
        />
        <p className="stats-text">{repositoryData.forksCount} forks</p>
      </div>
      <div className="status-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="stats-icon"
          alt="open-issues"
        />
        <p className="stats-text">{repositoryData.issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
