import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Terry Adam" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Brian Jones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Mark Stevens" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Mary Perry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Marc James" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Luke Brian" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="James Stevens" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
                <TestimonialCard name="Larry Perry" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}