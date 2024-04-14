import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback

    }
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Images;
