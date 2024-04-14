import { forwardRef } from "react";
import images from "~/assets/images";

con
const Images = forwardRef(({ ...props }) =>  {
    return <img ref={ref} {...props} />;
})

export default Images;
