import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';
import style from './Images.module.scss';
import classNames from 'classnames';

const Images = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(className, style.wrapper)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Images;
