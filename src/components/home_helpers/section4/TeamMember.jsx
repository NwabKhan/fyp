import React from "react";
import { Link } from "react-router-dom";
import css from './section.module.css' 
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
const TeamMember = ({ data }) => {
  const { name, title, image } = data;
  return (
    <div className={css.team_member}>

      <div className={css.img_div}>
        <img src={image} alt="Team Member" />
        <ul className={css.social_icons}>
          <li>
            <Link className={css.link}>
              <LinkedIn className={css.icon} />
            </Link>
          </li>
          <li>
            <Link className={css.link}>
              <Twitter className={css.icon} />
            </Link>
          </li>
          <li>
            <Link className={css.link}>
              <GitHub className={css.icon} />
            </Link>
          </li>
          <li>
            <Link className={css.link}>
              <Facebook className={css.icon} />
            </Link>
          </li>
        </ul>
      </div>
    
    <h4>{name}</h4>
    <p>{title}</p>
    </div>
  );
};

export default TeamMember;
