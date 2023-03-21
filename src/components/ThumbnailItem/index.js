import './index.css'

const ThumbnailItem = props => {
  const {details, onThumbnailClick} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const selectItem = () => {
    onThumbnailClick(id)
  }

  return (
    <li>
      <button type="submit" onClick={selectItem}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
