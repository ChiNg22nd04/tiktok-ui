import { forwardRef } from "react";
import im

const Images = forwardRef(({ ...props }) =>  {
    return <img ref={ref} {...props} />;
})

export default Images;
