import React from 'react';
import { Image } from "@microsoft/fast-components-react-msft";

const ProfileImage = ({imageDetail}) => {
    
  return(
    <Image
      src={imageDetail.src}
      alt={imageDetail.alt}
    />
  )
}

export default ProfileImage;