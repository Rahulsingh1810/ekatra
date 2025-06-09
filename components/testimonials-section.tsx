import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Madhu S Gowda",
      rating: 5,
      text: "Came here for a wash and I am fully satisfied with the service and work. I recommend this place to my friends and will suggest you all here. They also do wheel alignment and balancing along with other services. I am happy with the service and will get my car service here in future as well.",
      location: "Local Guide · 98 reviews",
      timeAgo: "5 months ago",
      avatar: "MG",
    },
    {
      name: "Deepak Bijalwan",
      rating: 5,
      text: "Must Appreciate the sustained Focus of the Centre owner Mr Vamshi. Very patient listener. Doesn't try to market. Sheer focus on quality service and honest pricing structure. Last time, Sun film was Opal 70 Gold Series LLumar and this time Diamond series Opal 70 installed as replacement.",
      location: "5 reviews",
      timeAgo: "2 months ago",
      avatar: "DB",
    },
    {
      name: "Revathi Vengatasan",
      rating: 5,
      text: "I had a great experience with Ekatra Car Care recently when I took my car in for interior cleaning. I have a pet dog, and over time, dog hair had gotten into every corner. The team did a fantastic job! They thoroughly cleaned the entire interior, removing all the stubborn dog hair and leaving the car looking fresh and spotless at a very reasonable price.",
      location: "1 review",
      timeAgo: "1 month ago",
      avatar: "RV",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto mobile-responsive">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-responsive-lg font-bold mb-4 sm:mb-6 gradient-text">What Our Customers Say</h2>
          <p className="text-responsive-md text-gray-400">Real reviews from our satisfied customers on Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-morphism rounded-3xl p-6 sm:p-8 animate-slide-up hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-rose-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-red-500 text-red-500 animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-400 mb-6 sm:mb-8 italic text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm sm:text-lg animate-pulse-glow">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                  <div className="text-gray-500 text-xs">{testimonial.timeAgo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
