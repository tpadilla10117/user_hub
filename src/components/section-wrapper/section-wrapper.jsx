import React from 'react';
/* import styles from './section-wrapper.styles.scss'; */
/* import classnames from 'classnames'; */

const SectionWrapper = ( {content, grayBg, id, className} ) => {
    /* const classNames = classnames(styles.SectionWrapper, { [styles.GrayBg]: grayBg} ) */

    return (
        <section id={id} className={className}>
            {content}
        </section>
    )
};

export default SectionWrapper;