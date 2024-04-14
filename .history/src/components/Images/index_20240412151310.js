import { forwardRef } from "react";

const Images = forwardRef(({ ...props }) =>  {
    return <img ref={ref} {...props} />;
})

export default Images;
