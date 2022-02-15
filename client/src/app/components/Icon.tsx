
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

type IconProps = {
  name: string;
  size?: string;
};

export default function Icon(props: IconProps) {

  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return (
          <FaInstagram           
          />
        );

      case 'facebook':
        return (
          <FaFacebook  />
        );

      case 'twitter':
        return (
          <FaTwitter  />
        );

      case 'github':
        return (
          <FaGithub  />
        );

      case 'linkedin':
        return (
          <FaLinkedin  />
        );

      case 'web':
        return (
          <IoIosGlobe />
        );

      default:
        return;
    }
  };

  return <>{getSkillIcon(props.name.toLowerCase())}</>;
}
