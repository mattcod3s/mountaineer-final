import React from 'react';
import './headerStyles.scss';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';


const Header = () => {

    return (
        <div className="header__wrapper">
            <div className="header__wrapper__icon">
                    <FilterHdrIcon className="icon"/>
            </div>
            <div className="header__content">
                <div className="header__content__title">
                    <h2>
                        MOUNTAINEER
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Header;
