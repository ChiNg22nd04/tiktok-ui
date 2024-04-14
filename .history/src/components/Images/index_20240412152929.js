import { forwardRef } from 'react';
import images from '~/assets/images';

console.log(images.noImage);
const Images = forwardRef(({ ...props }) => {
    return <img ref={ref} {...props} />;
});

export default Images;
