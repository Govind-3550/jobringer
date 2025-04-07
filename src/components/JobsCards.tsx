// components/JobCard.tsx
import React from "react";
import { Icon } from '@iconify/react';

type JobCardProps = {
  index: number | string;
  jobType: string;
  title: string;
  link: string;
  company: string;
  experience: string;
  location: string;
  time: string;
  isVerified: string | boolean;
  jobId: string;
};

const JobCard: React.FC<JobCardProps> = ({
  index,
  jobType,
  title,
  link,
  company,
  experience,
  location,
  time,
  isVerified,
  jobId,
}) => {
  return (

     <div
          className="swiper-slide"
          role="group"
          aria-label={`${Number(index)+1} / 15`}
          data-swiper-slide-index={`${index}`}
          style={{ width: '376.5px', marginRight: '5px' }}
        >
          <div className="section_div match1s" style={{ height: '234px' }}>
            <div className="job_type">{jobType ? "In Office job" : null}</div>
            <a
              target="_blank"
              href={link}
              rel="noreferrer"
            >
              <div className="section_desg" style={{ height: '28px' }}>
              {title}
              </div>
            </a>
            <a
              target="_blank"
              href={link}
              rel="noreferrer"
            >
              <div className="jobCompanyName" itemProp="hiringOrganization">
              {company}
                <span className="atooltip" style={{ marginLeft: '5px' }}>
                  <Icon icon="ic:baseline-verified-user" style={{ color: '#6212a6' }}></Icon>
                  <span className="atooltiptext textbottom sf-hidden">{ isVerified == true ? "Verified Employer" : ""}</span>
                </span>
              </div>
            </a>
            <a href={link}>
              <div className="job_details">
                <div className="job_time">
                  <ul>
                    <li>
                      <Icon icon="ic:round-access-time" style={{ marginRight: '5px' }}></Icon>
                      {time}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="company_exp">
                <Icon icon="ph:briefcase-thin" width="17" style={{ marginRight: '5px' }}></Icon>
                {experience}
              </div>
              <div className="section_location" style={{ height: '17px' }}>
                <div className="location" style={{ height: '17px' }}>
                  <p>
                    <Icon
                      icon="material-symbols:location-on-outline"
                      width="17"
                      style={{ marginRight: '5px' }}
                    ></Icon>
                    {location}
                  </p>
                </div>
              </div>
            </a>
            <a data-jobid={jobId} className="apply-job-btn">
              <p>Apply</p>
              <Icon icon="solar:map-arrow-up-bold-duotone" rotate={1}></Icon>
            </a>
          </div>
        </div>
  );
};

export default JobCard;
