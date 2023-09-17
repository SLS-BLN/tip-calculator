export default function Shellbar() {
  return (
    <div className="is-cozy">
      <div dir="ltr">
        <div>
          <div className="fd-shellbar">
            <div className="fd-shellbar__group fd-shellbar__group--product">
              <span className="fd-shellbar__logo">
                <img
                  src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                  srcSet="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                  width="48"
                  height="24"
                  alt="SAP"
                />
              </span>
              <span className="fd-shellbar__title">Private Portal</span>
            </div>
            <div className="fd-shellbar__group fd-shellbar__group--actions">
              <div className="fd-shellbar__action">
                <div className="fd-popover fd-popover--right">
                  <div className="fd-popover__control">
                    <div
                      className="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                      aria-controls="WV3AY276"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="button"
                      tabIndex="0"
                    >
                      <span className="fd-avatar fd-avatar--xs fd-avatar--circle fd-shellbar__avatar--circle ">
                        SL
                      </span>
                    </div>
                  </div>
                  <div
                    className="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"
                    aria-hidden="true"
                    id="WV3AY276"
                  >
                    <nav className="fd-menu">
                      <ul className="fd-menu__list fd-menu__list--no-shadow">
                        <li className="fd-menu__item">
                          <a role="button" className="fd-menu__link">
                            <span className="fd-menu__title">Settings</span>
                          </a>
                        </li>
                        <li className="fd-menu__item">
                          <a role="button" className="fd-menu__link">
                            <span className="fd-menu__title">Sign Out</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}