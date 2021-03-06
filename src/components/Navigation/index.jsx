import React from "react";
import {useHistory} from "react-router";
import {NavButton} from "./styles";

export const Navigation = () => {
    const history = useHistory() || [];
    return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            StartApp
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Recursos para ti
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Quienes somos
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Conoce el equipo
              </a>
            </li>
              <li>
                  <li>
                      <NavButton id={'btn-signin'} onClick={() => history.push('/signin')}>Ingresa</NavButton>
                  </li>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
