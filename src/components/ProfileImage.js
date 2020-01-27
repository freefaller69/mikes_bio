import React from 'react';
import { Image } from "@microsoft/fast-components-react-msft";
import styles from './ProfileImage.module.css';

const ProfileImage = ({imageDetail}) => {
    
  return(
    <Image
      className={styles.profileImage}
      src={imageDetail.src}
      alt={imageDetail.alt}
    />
  )
}

export default ProfileImage;