import React from 'react';
import styles from './main-wrapper.styles.scss';
import classnames from 'classnames';

const MainWrapper = ( {content, grayBg, id} ) => {
    const classNames = classnames(styles.MainWrapper, { [styles.GrayBg]: grayBg} )

    return (
        <main id={id} className={classNames}>
            {content}
        </main>
    )
};

export default MainWrapper;