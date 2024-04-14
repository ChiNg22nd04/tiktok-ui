import { forwardRef } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    return <img ref={ref} {...props} />;
});

export default Images;
