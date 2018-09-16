import React from 'react';
import { Modal } from 'semantic-ui-react';
import Bakery from './icons/Bakery.jsx';
import Breakfast from './icons/Breakfast.jsx';
import Brunch from './icons/Brunch.jsx';
import Chinese from './icons/Chinese.jsx';
import Dessert from './icons/Dessert.jsx';
import French from './icons/French.jsx';
import Italian from './icons/Italian.jsx';
import Japanese from './icons/Japanese.jsx';
import Mexican from './icons/Mexican.jsx';
import Pizza from './icons/Pizza.jsx';
import Seafood from './icons/Seafood.jsx';
import TexMex from './icons/TexMex.jsx';
import Thai from './icons/Thai.jsx';
import Vegetarian from './icons/Vegetarian.jsx';
import Vietnamese from './icons/Vietnamese.jsx';

const ModalModalExample = props => (
  <div>
    <Modal open={props.open} onClose={props.onClose} className="modal">
      <Modal.Header>
        <div className="modalContainer">
          <div className="modalLeftSide">
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
                    className="prompt modalPrompt"
                    type="text"
                    placeholder="Find a great place near you"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modalRightSide">
            <div className="searchContainer">
              <div className="ui transparent icon input">
                <div className="svgSearchContainer">
                  <svg viewBox="0 0 24 24" version="1.1" width="24" height="24">
                    <title>location</title>
                    <g
                      stroke-width="1.5"
                      fill="none"
                      fill-rule="evenodd"
                      stroke="black"
                    >
                      <g id="location">
                        <g
                          id="Page-1"
                          transform="translate(5.000000, 2.000000)"
                        >
                          <path
                            d="M9.4744,6.9686 C9.4744,8.3526 8.3524,9.4746 6.9684,9.4746 C5.5844,9.4746 4.4624,8.3526 4.4624,6.9686 C4.4624,5.5846 5.5844,4.4626 6.9684,4.4626 C8.3524,4.4626 9.4744,5.5846 9.4744,6.9686 L9.4744,6.9686 Z"
                            id="Stroke-1"
                          />
                          <path
                            d="M8.6561,15.7419 C10.0781,13.7569 11.9381,11.1549 12.3121,10.6129 C12.9311,9.7119 13.4371,8.3209 13.4371,6.9679 C13.4371,3.3959 10.5411,0.4999 6.9681,0.4999 C3.3961,0.4999 0.5001,3.3959 0.5001,6.9679 C0.5001,8.3209 1.6251,10.6129 1.6251,10.6129 L6.9681,18.0969"
                            id="Stroke-3"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <input
                  className="prompt modalPrompt"
                  type="text"
                  placeholder="near San Francisco"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="zgt-search-bar-recent-searches"
          ng-if="::searchBarCtrl.recentSearchTerms.length"
        >
          <div
            class="zgt-search-bar-zero-state-suggestion zgt-search-bar-narrow-suggestion"
            ng-repeat="searchTerm in ::searchBarCtrl.recentSearchTerms"
            ng-click="searchBarCtrl.selectSuggestion($index)"
            ng-mouseenter="searchBarCtrl.setSuggestedIndex($index)"
            ng-mouseleave="searchBarCtrl.clearSuggestedIndex()"
            ng-class="{'zgt-search-bar-suggestion-selected': searchBarCtrl.suggestedIndex == $index}"
            role="button"
            tabindex="0"
          >
            <ng-include
              class="zgt-search-bar-suggestion-icon"
              src="'assets/img/search.svg'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="black"
              >
                <title>search</title>
                <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                  <path d="M9.623 4.5C6.8 4.5 4.5 6.8 4.5 9.623c0 2.825 2.3 5.124 5.123 5.123 2.825 0 5.123-2.298 5.123-5.124C14.746 6.8 12.45 4.5 9.623 4.5zM15.174 15.118L20 19.943" />
                </g>
              </svg>
            </ng-include>
            Brunch
          </div>
          <div
            class="zgt-search-bar-zero-state-suggestion zgt-search-bar-narrow-suggestion"
            ng-repeat="searchTerm in ::searchBarCtrl.recentSearchTerms"
            ng-click="searchBarCtrl.selectSuggestion($index)"
            ng-mouseenter="searchBarCtrl.setSuggestedIndex($index)"
            ng-mouseleave="searchBarCtrl.clearSuggestedIndex()"
            ng-class="{'zgt-search-bar-suggestion-selected': searchBarCtrl.suggestedIndex == $index}"
            role="button"
            tabindex="0"
          >
            <ng-include
              class="zgt-search-bar-suggestion-icon"
              src="'assets/img/search.svg'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="black"
              >
                <title>search</title>
                <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                  <path d="M9.623 4.5C6.8 4.5 4.5 6.8 4.5 9.623c0 2.825 2.3 5.124 5.123 5.123 2.825 0 5.123-2.298 5.123-5.124C14.746 6.8 12.45 4.5 9.623 4.5zM15.174 15.118L20 19.943" />
                </g>
              </svg>
            </ng-include>
            Mexican
          </div>
        </div>
        <div>
          <Bakery />
          <Breakfast />
          <Brunch />
        </div>
        <div>
          <Chinese />
          <Dessert />
          <French />
        </div>
        <div>
          <Italian />
          <Japanese />
          <Mexican />
        </div>
        <div>
          <Pizza />
          <Seafood />
          <TexMex />
        </div>
        <div>
          <Thai />
          <Vegetarian />
          <Vietnamese />
        </div>
      </Modal.Header>
    </Modal>
  </div>
);

export default ModalModalExample;
