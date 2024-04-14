import { forwardRef } from 'react';
import images from '~/assets/images';

const Images = forwardRef(({ ...props }, ref) => {
    return <img ref={ref} {...props} />;
});

export default Images;
