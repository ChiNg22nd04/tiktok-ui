import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback]
    return <img ref={ref} src={src} alt={alt} {...props} />;
});

export default Images;
