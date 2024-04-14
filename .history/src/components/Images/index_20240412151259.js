import { forwardRef } from "react";

const Images = forwardRef(({ ...props }) =>  {
    return <img {...props} />;
})

export default Images;
