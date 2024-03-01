'use client'

import React from 'react';
import SectionHeading from './section-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { certificationsData } from '@/lib/data';
import { useSectionInView } from '../lib/hooks';
import { useTheme } from '../context/theme-context';
import Link from 'next/link';

function Certifications() {

  const {ref} = useSectionInView('Certifications')
  const { theme} = useTheme()
  return (
    <section ref={ref} id='certifications'className='scroll-mt-28 mb-28 sm:mb-40' >
      <SectionHeading> My Certifications</SectionHeading>
      <VerticalTimeline lineColor="">
            {
              certificationsData.map((certificate, index) => (
                <React.Fragment  key={index}>
                <VerticalTimelineElement contentStyle={{
                  background : theme === 'light'? '#f3f4f6': 'rgba(255,255,255,0.05)',
                  boxShadow: 'none',
                  border : '1px solid rgba(0,0,0,0.05)',
                  textAlign: "left",
                  padding : '1.3rem 2rem'
                }}
                visible={true}
                contentArrowStyle={{
                  borderRight :  theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={certificate.date}
                icon={certificate.icon}
                iconStyle={{
                  background :   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize : '1.5rem',
                }}
                >
                  <Link href={certificate.links} target='_blank' className='font-semibold capitalize cursor-pointer underline'>
                    {certificate.title}
                  </Link>
                  <p className='font-normal !mt-0'>
                    {
                      certificate.tech
                    }
                  </p>
                  <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{certificate.description}</p>
                </VerticalTimelineElement>
                </React.Fragment>
              ))
            }
      </VerticalTimeline>
    </section>
  )
}

export default Certifications