import React from 'react';

const animationStyle = {
  webkitAnimation: 'fadein 2s',
  mozAnimation: 'fadein 2s',
  msAnimation: 'fadein 2s',
  animation: 'fadein 2s',
};

function Tools(props) {
  return (
    <div className='container fadein' style={animationStyle}>
      <h2 className='subtitle is-2'>Settings</h2>
      <div className='tabs is-toggle is-centered'>
        <ul>
          <li onClick={props.changeSettingsMenu}>
            <a>
              <span className='icon is-small'>
                <i className='fas fa-image'></i>
              </span>
              <span>Background</span>
            </a>
          </li>
          <li onClick={props.changeSettingsMenu}>
            <a>
              <span className='icon is-small'>
                <i className='fas fa-heart'></i>
              </span>
              <span>Preferences</span>
            </a>
          </li>
          <li onClick={props.changeSettingsMenu}>
            <a>
              <span className='icon is-small'>
                <i className='fas fa-user-alt'></i>
              </span>
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='box fadein' id='settings-background'>
        <h4 className='subtitle is-4'>Background</h4>
        <div className='columns'>
          <div className='column'>
            <p>Change Background</p>
          </div>
          <div className='column'>
            <button
              className='button is-dark is-small'
              onClick={props.changeOverlay}
            >
              Change
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <p>Change Background Theme</p>
          </div>
          <div className='column'>
            <input
              type='text'
              className='input is-small'
              name='searchText'
              onChange={props.handleChange}
              placeholder='Mountains'
              id='searchText'
            />
            <button
              className='button is-dark is-small fadein'
              onClick={props.changeSearchTerm}
              style={{ marginTop: '1rem' }}
            >
              Change Theme
            </button>
          </div>
        </div>
      </div>
      <div
        className='box fadein'
        id='settings-preference'
        style={{ display: 'none' }}
      >
        <h4 className='subtitle is-4'>Preferences</h4>
        <div className='columns'>
          <div className='column'>
            <p>Change Background</p>
          </div>
          <div className='column'>
            <button
              className='button is-dark is-small'
              onClick={props.changeOverlay}
            >
              Change
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <p>Change Background Theme</p>
          </div>
          <div className='column'>
            <input
              type='text'
              className='input is-small'
              name='searchText'
              onChange={props.handleChange}
              placeholder='Mountains'
              id='searchText'
            />
            <button
              className='button is-dark is-small fadein'
              onClick={props.changeSearchTerm}
              style={{ marginTop: '1rem' }}
            >
              Change Theme
            </button>
          </div>
        </div>
      </div>
      <div
        className='box fadein'
        id='settings-account'
        style={{ display: 'none' }}
      >
        <h4 className='subtitle is-4'>Account</h4>
        <div className='columns'>
          <div className='column'>
            <p>Change Background</p>
          </div>
          <div className='column'>
            <button
              className='button is-dark is-small'
              onClick={props.changeOverlay}
            >
              Change
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <p>Change Background Theme</p>
          </div>
          <div className='column'>
            <input
              type='text'
              className='input is-small'
              name='searchText'
              onChange={props.handleChange}
              placeholder='Mountains'
              id='searchText'
            />
            <button
              className='button is-dark is-small fadein'
              onClick={props.changeSearchTerm}
              style={{ marginTop: '1rem' }}
            >
              Change Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;