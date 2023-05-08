import {useState} from 'react'
import {v4} from 'uuid'
import InputSection from '../InputSection'

import './index.css'

const PasswordManager = () => {
  const [web, setWebData] = useState('')
  const [username, setUserData] = useState('')
  const [password, setPassData] = useState('')
  const [search, setSearchData] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [list, setListData] = useState([])

  const updateSearchList = event => {
    setWebData(event.target.value)
  }

  const onChecked = () => {
    setIsChecked(prev => !prev)
  }

  const onChangeUsername = event => {
    setUserData(event.target.value)
  }

  const onChangePassword = event => {
    setPassData(event.target.value)
  }

  const upDateSearchList = event => {
    setSearchData(event.target.value)
  }

  const renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p>No Passwords</p>
    </div>
  )

  const onSubmitHandler = event => {
    event.preventDefault()

    const newItem = {
      id: v4(),
      web,
      username,
      password,
    }

    setListData(prevList => [...prevList, newItem])
    setWebData('')
    setUserData('')
    setPassData('')
  }

  const onDeleteItem = id => {
    const updatedList = list.filter(each => each.id !== id)
    setListData(updatedList)
  }

  const updatedList = list.filter(each =>
    each.web.toLowerCase().includes(search.toLowerCase()),
  )
  const count = updatedList.length

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="logo-image"
      />

      <div className="top-container">
        <form className="add-password-container" onSubmit={onSubmitHandler}>
          <h1 className="password-heading">Add New Password</h1>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="input-logo"
            />
            <input
              type="text"
              placeholder="Enter Website"
              className="input-item"
              value={web}
              onChange={updateSearchList}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="input-logo"
            />
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={onChangeUsername}
              className="input-item"
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="input-logo"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-item"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="add-button-container">
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="password-manager-image"
        />
      </div>
      <div className="bottom-container">
        <div>
          <div className="your-password-container">
            <div className="your-password-text-cont">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={upDateSearchList}
                className="input-item"
              />
            </div>
          </div>
          <hr />
          {count === 0 ? (
            renderNoPasswordsView()
          ) : (
            <ul className="list-items-container">
              {updatedList.map(each => (
                <InputSection
                  key={each.id}
                  itemDetails={each}
                  isChecked={isChecked}
                  onDeleteItem={onDeleteItem}
                />
              ))}
            </ul>
          )}

          <div className="show-password-container">
            <input
              type="checkbox"
              checked={isChecked}
              id="showPassword"
              onChange={onChecked}
            />
            <label htmlFor="showPassword">Show passwords</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordManager
