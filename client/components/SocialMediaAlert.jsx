import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default class SocialMediaAlert extends React.Component {
  render() {

    return (
      <div className="conatiner text-center">
        <OverlayTrigger
          trigger="click"
          overlay={
            <Popover>
              <Popover.Title as="h3"></Popover.Title>
              <Popover.Content>
                <div>Coming Soon</div>
              </Popover.Content>
            </Popover>
          }
        >
          <div variant="secondary">
            <div className="conatiner text-center">
              <div className="fab fa-facebook-f pad"></div>
              <div className="fab fa-instagram pad"></div>
              <div className="fab fa-twitter pad"></div>
              <div className="far fa-envelope"></div>
            </div>
          </div>
        </OverlayTrigger>{' '}
        <div className="paddingCard"></div>
        <div className="paddingCard"></div>
        <div className="paddingCard"></div>
      </div>
    );
  }
}
