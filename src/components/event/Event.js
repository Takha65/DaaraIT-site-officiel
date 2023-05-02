import React, { useState } from 'react';
import './Event.css';
import { RiShareForwardFill } from 'react-icons/ri';
import { AiFillCalendar } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';

const Event = ({ event }) => {
  const [toggleState, setToggleState] = useState('');

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 200) + '...' : str;
  };

  return (
    <div className="grid-item">
      <div className="headerCard">
        <div>
          <span></span>
          <h4>{event?.title}</h4>
        </div>
        <button>
          Partager
          <RiShareForwardFill />
        </button>
      </div>
      <div className="cardBody">
        <div className="category">
          <span>Tech</span>
          <span>Coding</span>
          <span>WebDev</span>
        </div>
        <img src={event?.image} alt="cardimage" className="cardimage" />
        <p className="description">
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {truncate(event?.desc)}
          </span>
        </p>
      </div>
      <div className="cardfooter">
        <button onClick={() => setToggleState(event?.title)}>
          En savoir plus
        </button>

        <div className="dateview">
          <span>
            <AiFillCalendar className="icon" />
            Il y a 6 mois
          </span>
          <span>
            <GrView className="icon" />
            1.6k vues
          </span>
        </div>
      </div>
      <div
        className={
          toggleState === event?.title
            ? 'event__modal modal__active'
            : 'event__modal'
        }
      >
        <div className="event__modal-content">
          <FaTimes
            className="event__modal-close"
            onClick={() => setToggleState('')}
          />
          <img src={event?.image} alt="cardimage" className="modalcardimage" />
          <div className="headerCard">
            <div>
              <span></span>
              <h4>{event?.title}</h4>
            </div>
            <button>
              Partager
              <RiShareForwardFill />
            </button>
          </div>
          <div className="category">
            <span>Tech</span>
            <span>Coding</span>
            <span>WebDev</span>
          </div>
          <p className="description">{event?.desc}</p>
          <div className="cardfooter">
            <span></span>

            <div className="dateview">
              <span>
                <AiFillCalendar className="icon" />
                Il y a 6 mois
              </span>
              <span>
                <GrView className="icon" />
                1.6k vues
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
