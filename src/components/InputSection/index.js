import './index.css'

const InputSection = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, web, password, username} = itemDetails

  const passwordItem = isChecked ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  const initial = web[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="initial-section">{initial}</div>
      <div className="text-cont">
        <p className="heading">{web}</p>
        <p className="para">{username}</p>
        {passwordItem}
      </div>
      <div className="button-cont">
        <button type="button" className="delete-button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default InputSection
