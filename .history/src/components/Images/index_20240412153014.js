import { forwardRef } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    return <img ref={ref} src='' {...props} />;
});

export default Images;
