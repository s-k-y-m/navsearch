import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Icons from './icons/Icons.jsx';
var boolean = false;

const ModalModalExample = props => (
  <div>
    <Modal open={props.open} onClose={props.onClose} className="modal">
      <Modal.Header>
        <div className="ui right aligned category search item">
          <div className="searchContainer">
            <div className="ui transparent icon input">
              <div className="svgSearchContainer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="searchSvg"
                >
                  <title>search</title>
                  <g
                    strokeWidth="1.5"
                    fill="none"
                    fillRule="evenodd"
                    stroke="black"
                  >
                    <path d="M9.623 4.5C6.8 4.5 4.5 6.8 4.5 9.623c0 2.825 2.3 5.124 5.123 5.123 2.825 0 5.123-2.298 5.123-5.124C14.746 6.8 12.45 4.5 9.623 4.5zM15.174 15.118L20 19.943" />
                  </g>
                </svg>
              </div>
              <input
                className="prompt"
                type="text"
                placeholder="Find a great place near you"
              />
            </div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
          <Icons />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
);

export default ModalModalExample;
