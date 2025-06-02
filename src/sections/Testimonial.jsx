import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonial = () => {
  return (
    <section id="testimonial" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Client Feedback Hightlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard card={testimonial}>
              <div className="flex item-center gap-3">
                <div>
                    <img src={testimonial.imgPath} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                </div>
                <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
