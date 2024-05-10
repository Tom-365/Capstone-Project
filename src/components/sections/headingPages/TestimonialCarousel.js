import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
              <TestimonialCard name="Terry Adam" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Brian Jones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Mark Stevens" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Mary Perry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Marc James" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Luke Brian" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="James Stevens" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Larry Perry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
             </Carousel>
    )
}