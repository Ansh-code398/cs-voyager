import Image from 'next/image';
import React from 'react';

const Team = ({ teamData }) => (
  <div className='team-body'>
    <div className="container">
      {teamData.map((member, index) => (

        <div className="card" data-aos="fade" key={index}>
          <div className="imgBx">
            <Image
              src={member.photo_url}
              alt={member.name}
              className="w-full hover:opacity-50 transition-all"
              width="100%"
              layout='fill'
              loading='lazy'
            />
          </div>
          <div className="content">
            <div className="contentBx">
              <h3>{member.name} <br /><span>{member.teams.toUpperCase()}</span><br/>
                {member.post ? `Current Post - ${member.post}` : member.isActive !== null && member.isActive ? 'Status -  This Member is Currently Active' : 'Status - This member is Currently Inactive'}</h3>
            </div>
            <ul className="sci">
              {member.socials.map((social, i) => (
                <li style={{ '--i': i+1 }} key={i}>
                  <a href={social.url} target="_blank" rel="noreferrer"><i className={social.icon} aria-hidden="true"></i></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    ))}
  </div>
  </div>
);

export default Team;