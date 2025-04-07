import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const logos = [/* 
  {
    link: 'https://www.jobringer.com/company-details/DESI202544182631',
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: 'DesignerPeople',
  },
  {
    link: 'https://www.jobringer.com/company-details/SEMS202544175524',
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: 'SEMS Welfare Foundation',
  },
  {
    link: 'https://www.jobringer.com/company-details/RISK202544174941',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Risk Care Insurance Broking Services',
  },
  {
    link: 'https://www.jobringer.com/company-details/MATR202544173656',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Matrix Cellular (International) Services Ltd.',
  },
  {
    link: 'https://www.jobringer.com/company-details/INNO202544173055',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'InnoBit Systems',
  },
  {
    link: 'https://www.jobringer.com/company-details/GO4E202544171344',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Go4Explore',
  },
  {
    link: 'https://www.jobringer.com/company-details/ZENI202544165451',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Zenith Leisure Holidays Ltd.',
  },
  {
    link: 'https://www.jobringer.com/company-details/VFSC20254416293',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'VFS Capital',
  },
  {
    link: 'https://www.jobringer.com/company-details/9YAR202544194048',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: '9Yards Technology',
  },
  {
    link: 'https://www.jobringer.com/company-details/NIVE202544193344',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Nivesh',
  },
  {
    link: 'https://www.jobringer.com/company-details/SHOR202544193116',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'Shorthills AI',
  },
  {
    link: 'https://www.jobringer.com/company-details/JRTE202544192453',
    imgSrc: 'data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>',
    alt: 'JR TECHNOLOGIES',
  },
  {
    link: "https://www.jobringer.com/company-details/HOUS202544191915",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "HOUSE OF W"
  },
  {
    link: "https://www.jobringer.com/company-details/EXPE202544191111",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Expenzing"
  },
  {
    link: "https://www.jobringer.com/company-details/HOPS202544185655",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Hopscotch"
  },
  {
    link: "https://www.jobringer.com/company-details/JOBV202544185326",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "JOB VISTA Consultant Private limited"
  },
  {
    link: "https://www.jobringer.com/company-details/EDUP202544184644",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "EduPristine"
  },
  {
    link: "https://www.jobringer.com/company-details/HAIK202544184356",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Haiko Logistics India Pvt. Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/RESO202544183840",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Resource Mapping Consultancy"
  },
  {
    link: "https://www.jobringer.com/company-details/JOSE202544183259",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Joseph and Mary Public School"
  },
  {
    link: "https://www.jobringer.com/company-details/DESI202544182631",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "DesignerPeople"
  },
  {
    link: "https://www.jobringer.com/company-details/SEMS202544175524",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "SEMS Welfare Foundation"
  },
  {
    link: "https://www.jobringer.com/company-details/RISK202544174941",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Risk Care Insurance Broking Services"
  },
  {
    link: "https://www.jobringer.com/company-details/MATR202544173656",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Matrix Cellular (International) Services Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/INNO202544173055",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "InnoBit Systems"
  },
  {
    link: "https://www.jobringer.com/company-details/GO4E202544171344",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Go4Explore"
  },
  {
    link: "https://www.jobringer.com/company-details/ZENI202544165451",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Zenith Leisure Holidays Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/VFSC20254416293",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "VFS Capital"
  },
  {
    link: "https://www.jobringer.com/company-details/9YAR202544194048",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "9Yards Technology"
  },
  {
    link: "https://www.jobringer.com/company-details/NIVE202544193344",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Nivesh"
  },
  {
    link: "https://www.jobringer.com/company-details/SHOR202544193116",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Shorthills AI"
  },
  {
    link: "https://www.jobringer.com/company-details/JRTE202544192453",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "JR TECHNOLOGIES"
  },
  {
    link: "https://www.jobringer.com/company-details/HOUS202544191915",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "HOUSE OF W"
  },
  {
    link: "https://www.jobringer.com/company-details/EXPE202544191111",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Expenzing"
  },
  {
    link: "https://www.jobringer.com/company-details/HOPS202544185655",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Hopscotch"
  },
  {
    link: "https://www.jobringer.com/company-details/JOBV202544185326",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "JOB VISTA Consultant Private limited"
  },
  {
    link: "https://www.jobringer.com/company-details/EDUP202544184644",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "EduPristine"
  },
  {
    link: "https://www.jobringer.com/company-details/HAIK202544184356",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Haiko Logistics India Pvt. Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/RESO202544183840",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Resource Mapping Consultancy"
  },
  {
    link: "https://www.jobringer.com/company-details/JOSE202544183259",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Joseph and Mary Public School"
  },
  {
    link: "https://www.jobringer.com/company-details/DESI202544182631",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "DesignerPeople"
  },
  {
    link: "https://www.jobringer.com/company-details/SEMS202544175524",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "SEMS Welfare Foundation"
  },
  {
    link: "https://www.jobringer.com/company-details/RISK202544174941",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Risk Care Insurance Broking Services"
  },
  {
    link: "https://www.jobringer.com/company-details/MATR202544173656",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Matrix Cellular (International) Services Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/INNO202544173055",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "InnoBit Systems"
  },{
    link: "https://www.jobringer.com/company-details/GO4E202544171344",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Go4Explore"
  },
  {
    link: "https://www.jobringer.com/company-details/ZENI202544165451",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "Zenith Leisure Holidays Ltd."
  },
  {
    link: "https://www.jobringer.com/company-details/VFSC20254416293",
    imgSrc: "data:image/svg+xml,<svg xmlns=;http://www.w3.org/2000/svg; width=;160; height=;160;><rect fill-opacity=;0;/></svg>",
    alt: "VFS Capital"
  } */

    {
        link: "https://www.jobringer.com/company-details/DESI202544182631",
        imgSrc: "images/content/company-logo/hjp39e9c35c92692e7c0e0b538b5d26f14f.png",
        alt: "DesignerPeople"
      },
      {
        link: "https://www.jobringer.com/company-details/SEMS202544175524",
        imgSrc: "images/content/company-logo/hjpcf611fe583565ebfb6e9926a4e891be7.png",
        alt: "SEMS Welfare Foundation"
      },
      {
        link: "https://www.jobringer.com/company-details/RISK202544174941",
        imgSrc: "images/content/company-logo/hjpa955db6f1bba463fb45eab2063909538.png",
        alt: "Risk Care Insurance Broking Services"
      },
      {
        link: "https://www.jobringer.com/company-details/MATR202544173656",
        imgSrc: "images/content/company-logo/hjpe6e56dc691ed1645f70d2e5085d7e83d.png",
        alt: "Matrix Cellular (International) Services Ltd."
      },
      {
        link: "https://www.jobringer.com/company-details/INNO202544173055",
        imgSrc: "images/content/company-logo/hjp1dc31ade01094a5bf12cba85ad5bbfc8.png",
        alt: "InnoBit Systems"
      },
      {
        link: "https://www.jobringer.com/company-details/GO4E202544171344",
        imgSrc: "images/content/company-logo/hjpbcff132c4bd97908694f346bcfde355b.png",
        alt: "Go4Explore"
      },
      {
        link: "https://www.jobringer.com/company-details/ZENI202544165451",
        imgSrc: "images/content/company-logo/hjp9e21543b667e12a373470a08a7cde68c.png",
        alt: "Zenith Leisure Holidays Ltd."
      },
      {
        link: "https://www.jobringer.com/company-details/VFSC20254416293",
        imgSrc: "images/content/company-logo/hjpfe60b8ff1a593e3c46d4c8a46df9e06e.png",
        alt: "VFS Capital"
      },
      {
        link: "https://www.jobringer.com/company-details/9YAR202544194048",
        imgSrc: "images/content/company-logo/hjpd6389d698aab8c2e1f856dbe0285b4a7.png",
        alt: "9Yards Technology"
      },
      {
        link: "https://www.jobringer.com/company-details/NIVE202544193344",
        imgSrc: "images/content/company-logo/hjp946be22f5a4763a420dc5d02eccccb7e.png",
        alt: "Nivesh"
      },
      {
        link: "https://www.jobringer.com/company-details/SHOR202544193116",
        imgSrc: "images/content/company-logo/hjp208b8b26187780828892ce43c41ae92a.png",
        alt: "Shorthills AI"
      },
      {
        link: "https://www.jobringer.com/company-details/JRTE202544192453",
        imgSrc: "images/content/company-logo/hjp590e58820ddf7666addd9fa5d23065e9.png",
        alt: "JR TECHNOLOGIES"
      },
      {
        link: "https://www.jobringer.com/company-details/HOUS202544191915",
        imgSrc: "images/content/company-logo/hjp014bb4ccc735906bfeeae8c7fbc84e16.png",
        alt: "HOUSE OF W"
      },
      {
        link: "https://www.jobringer.com/company-details/EXPE202544191111",
        imgSrc: "images/content/company-logo/hjp78203cdcffd578e9359c5c90c4933ed0.png",
        alt: "Expenzing"
      },
      {
        link: "https://www.jobringer.com/company-details/HOPS202544185655",
        imgSrc: "images/content/company-logo/hjp6cf84e2b8a323e94d5c72edc7fc4a2c2.png",
        alt: "Hopscotch"
      },
      {
        link: "https://www.jobringer.com/company-details/JOBV202544185326",
        imgSrc: "images/content/company-logo/hjp3126e8c298cddd110c1fdbb30f862f6b.png",
        alt: "JOB VISTA Consultant Private limited"
      },
      {
        link: "https://www.jobringer.com/company-details/EDUP202544184644",
        imgSrc: "images/content/company-logo/hjpb1d3ad087fc0d801cfdc950c640b2904.png",
        alt: "EduPristine"
      },
      {
        link: "https://www.jobringer.com/company-details/HAIK202544184356",
        imgSrc: "images/content/company-logo/hjp41498bf4685778560f88e8a3f7f0c6ef.png",
        alt: "Haiko Logistics India Pvt. Ltd."
      },
      {
        link: "https://www.jobringer.com/company-details/RESO202544183840",
        imgSrc: "images/content/company-logo/hjpfd1fa29b2d166eabec41b46d52c1151d.png",
        alt: "Resource Mapping Consultancy"
      },
      {
        link: "https://www.jobringer.com/company-details/JOSE202544183259",
        imgSrc: "images/content/company-logo/hjpff533b4b91b8a98e8a51fb8e37a9d6c5.png",
        alt: "Joseph and Mary Public School"
      },
      {
        link: "https://www.jobringer.com/company-details/DESI202544182631",
        imgSrc: "images/content/company-logo/hjp39e9c35c92692e7c0e0b538b5d26f14f.png",
        alt: "DesignerPeople"
      },
      {
        link: "https://www.jobringer.com/company-details/SEMS202544175524",
        imgSrc: "images/content/company-logo/hjpcf611fe583565ebfb6e9926a4e891be7.png",
        alt: "SEMS Welfare Foundation"
      },
      {
        link: "https://www.jobringer.com/company-details/RISK202544174941",
        imgSrc: "images/content/company-logo/hjpa955db6f1bba463fb45eab2063909538.png",
        alt: "Risk Care Insurance Broking Services"
      },
      {
        link: "https://www.jobringer.com/company-details/MATR202544173656",
        imgSrc: "images/content/company-logo/hjpe6e56dc691ed1645f70d2e5085d7e83d.png",
        alt: "Matrix Cellular (International) Services Ltd."
      },
      {
        link: "https://www.jobringer.com/company-details/INNO202544173055",
        imgSrc: "images/content/company-logo/hjp1dc31ade01094a5bf12cba85ad5bbfc8.png",
        alt: "InnoBit Systems"
      },
      {
        link: "https://www.jobringer.com/company-details/GO4E202544171344",
        imgSrc: "images/content/company-logo/hjpbcff132c4bd97908694f346bcfde355b.png",
        alt: "Go4Explore"
      },
      {
        link: "https://www.jobringer.com/company-details/ZENI202544165451",
        imgSrc: "images/content/company-logo/hjp9e21543b667e12a373470a08a7cde68c.png",
        alt: "Zenith Leisure Holidays Ltd."
      },
      {
        link: "https://www.jobringer.com/company-details/VFSC20254416293",
        imgSrc: "images/content/company-logo/hjpfe60b8ff1a593e3c46d4c8a46df9e06e.png",
        alt: "VFS Capital"
      }
];

const FeaturedEmp = () => {
    return (
      <>
          <div className="row fetured-emp">
               <div className="col-md-12">
                 <span className="fly-po">
                   <span className="black-lg">Featured</span>
                   <span className="blue-bg">Employers</span>
                 </span>
         
                 <div className="Service-slider slick-initialized slick-slider">
                   <div className="slick-list draggable">
                     <Swiper
                       modules={[Autoplay]}
                       autoplay={{
                         delay: 2000,
                         disableOnInteraction: false,
                       }}
                       loop={true}
                       speed={800}
                       slidesPerView={8}
                       spaceBetween={10}
                       centeredSlides={false}
                       breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 10 },
                        768: { slidesPerView: 6, spaceBetween: 10 },
                        1024: { slidesPerView: 8, spaceBetween: 10 },
                       }}
                       className="slick-track"
                       style={{
                         opacity: 1,
                       }}
                     >
                       {logos.map((logo, index) => (
                         <SwiperSlide
                           key={index}
                           className="slide-Service slick-slide slick-cloned"
                           style={{ width: '144px' }}
                         >
                           <a target="_blank" href={logo.link} tabIndex={-1}>
                             <div>
                               <img
                                 loading="lazy"
                                 src={'https://www.jobringer.com/'+logo.imgSrc}
                                 alt={logo.alt}
                                 style={{
                                   backgroundBlendMode: 'normal',
                                   backgroundClip: 'content-box',
                                   backgroundPosition: '50% 50%',
                                   backgroundColor: 'rgba(0,0,0,0)',
                                   backgroundSize: 'contain',
                                   backgroundOrigin: 'content-box',
                                   backgroundRepeat: 'no-repeat',
                                 }}
                               />
                             </div>
                           </a>
                         </SwiperSlide>
                       ))}
                     </Swiper>
                   </div>
                 </div>
               </div>
               <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
             </div>
      </>
    )
  }
  
  export default FeaturedEmp