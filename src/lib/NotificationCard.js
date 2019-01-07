import React from 'react';
import PropTypes from 'prop-types';

import './NotificationCard.scss';


const NotificationCard = ({ status, header, content, dateStamp }) => {

    // Toggles the div for new message notification light
    const showHideNew = status ? "NotificationCard__new" : "NotificationCard__old";

    // Turns datestamp into duration
    const timeDifference = (notificationDateStamp) => {

        const currentDate = new Date();
        const currentTime = currentDate.getTime();
        // const notificationTimeStamp = notificationDateStamp.getTime();
        const notificationTimeStamp = 1546625828785 - 29346534556;

        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;

        const elapsed = currentTime - notificationTimeStamp;

        if (elapsed < msPerMinute) {
          let time = Math.round(elapsed/1000);
          if (time === 1) {
            return `${time} second ago`;
          } else {
            return `${time} seconds ago`;
          }
        }
        else if (elapsed < msPerHour) {
          let time = Math.round(elapsed/msPerMinute);
          if (time === 1) {
            return `${time} minute ago`;
          } else {
            return `${time} minutes ago`;
          }
        }
        else if (elapsed < msPerDay ) {
          let time = Math.round(elapsed/msPerHour);
          if (time === 1) {
            return `${time} hour ago`;
          } else {
            return `${time} hours ago`;
          }
        }
        else if (elapsed < msPerMonth) {
          let time = Math.round(elapsed/msPerDay);
          if (time === 1) {
            return `${time} day ago`;
          } else {
            return `${time} days ago`;
          }
        }
        else if (elapsed < msPerYear) {
          let time = Math.round(elapsed/msPerMonth);
          if (time === 1) {
            return `${time} month ago`;
          } else {
            return `${time} months ago`;
          }
        }
        else {
          let time = Math.round(elapsed/msPerYear);
          if (time === 1) {
            return `${time} year ago`;
          } else {
            return `${time} years ago`;
          }
        }
    }


    return (
    <div className="NotificationCard">
        <div className="NotificationCard__left">
        <span className={showHideNew}>.</span>
        <h3 className="NotificationCard__header">{header}</h3>
        <p className="NotificationCard__content">{content}</p>
        <p className="NotificationCard__time">{timeDifference(dateStamp)}</p>
        </div>

        <div className="NotificationCard__right">
        <a href="#" className="NotificationCard__view">
            <img className="NotificationCard__view-icon" src="assets/icons/View.svg" alt="View Icon" style={{fill:'white'}} />

        </a>

        <span className="NotificationCard__separator"></span>
        <a href="#" className="NotificationCard__close">
            <img className="NotificationCard__view-icon" src="assets/icons/View.svg" alt="View Icon" style={{fill:'white'}} />
        </a>
        </div>
    </div>
    );
}

// PropTypes check
NotificationCard.propTypes = {
    status: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    dateStamp: PropTypes.instanceOf(Date).isRequired
};

export default NotificationCard;
