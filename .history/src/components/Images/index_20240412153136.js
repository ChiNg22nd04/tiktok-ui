import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={} />;
});

export default Images;
