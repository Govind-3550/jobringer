import React from 'react';

const JobEmpSection: React.FC = () => {
  return (
    <section className="jobemp">
      <div className="continer-fluid">
        <div className="login-section">
          <div className="row" id="login-section">
            <div className="job-seeker-div">
              <h1 className="titile1" style={{ fontSize: '20px', marginTop: '10px' }}>
                Bringing you the Perfect Job !
              </h1>
              <h2 className="titile1" style={{ fontSize: '17px', marginTop: '5px', fontWeight: 500, textTransform: 'none' }}>
                11,000+ JOBS to Apply
              </h2>
              <div className="flex-holder-parent">
                <div className="form-login">
                  <form className="form-inline">
                    <span className="form-control mr-sm-2 home-search open-search">
                      Search Jobs Now
                    </span>
                    <span className="yello-btn-sm btn btn-outline-success my-2 my-sm-0 mr-sm-2 open-search">
                      Search
                    </span>
                  </form>
                  <div className="btn-log">
                    <a id="js-Login" href="https://www.jobringer.com/jobs" className="purple-btn-sm">
                      View Jobs
                    </a>
                    <a href="https://www.jobringer.com/jobseeker/registration?signup" className="yello-btn-sm">
                      Register For FREE
                    </a>
                  </div>
                </div>
                <div className="flex-holder">
                  <div className="most-search">
                    <p>
                      <strong>Quick Job Search</strong>
                      <i className="fa-solid fa-magnifying-glass" style={{ margin: '0px 5px' }}></i>
                    </p>
                    <div className="keyHolder">
                      {[
                        ['#Fresher', 'jobs-for-fresher'],
                        ['#Work From Home', 'jobs-for-WFH'],
                        ['#WFH', 'jobs-for-WFH'],
                        ['#IT', 'jobs-in-information-technology'],
                        ['#HR', 'jobs-in-Human-Resources'],
                        ['#Back Office', 'jobs-for-back-office'],
                        ['#BPO Jobs', 'jobs-for-BPO'],
                        ['#ITES', 'jobs-in-ITES'],
                        ['#Finance', 'jobs-in-finance'],
                        ['#Accounts', 'jobs-in-accounts'],
                        ['#Medical', 'jobs-in-medical'],
                        ['#Pharma', 'jobs-in-pharma'],
                        ['#Manager', 'jobs-for-manager'],
                        ['#Developer', 'jobs-for-developer'],
                        ['#Marketing', 'jobs-for-Marketing'],
                        ['#Engineering', 'jobs-in-Engineering'],
                        ['#Non Government Jobs', 'jobs']
                      ].map(([label, path], index) => (
                        <a key={index} href={`https://www.jobringer.com/${path}`} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="employee-div">
              <div className="holder">
                <h2 className="titile1">Employers</h2>
                <h2 className="titile2 sf-hidden">Recruit smart, Recruit right</h2>
              </div>
              <div className="textholder">
                <p className="text-anim">
                  <strong>WELCOME OFFER - </strong>
                  FREE JOB Postings and Much More.
                </p>
              </div>
              <div className="btn-log">
                <a href="https://www.jobringer.com/employer/login?signup" className="blue-btn-sm">
                  Register for FREE
                </a>
                <a href="https://www.jobringer.com/employer/post-a-job" className="purple-btn-sm">
                  Post A Job
                </a>
                <a className="salesbtn1" href="https://www.jobringer.com/contact-us">
                  Sales Enquiry
                </a>
              </div>
            </div>
          </div>
          <div className="search-model" style={{ display: 'none' }}></div>
        </div>
      </div>
    </section>
  );
};

export default JobEmpSection;
