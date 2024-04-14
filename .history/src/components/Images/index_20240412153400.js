import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import style from './Images.module.scss'
im

const Images = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };
    return <img className={className} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Images;
