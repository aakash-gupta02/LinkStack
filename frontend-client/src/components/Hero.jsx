import React from 'react'

const Hero = () => {
  return (
    <div>    <section class="hero-gradient text-white">
        <div class="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center">
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 max-w-3xl">Build Your Link in Bio with One Click</h1>
            <p class="text-lg text-center mb-10 max-w-2xl">Create a professional bio link page that showcases all your content in one place. Perfect for creators, influencers, and professionals.</p>
            <div class="flex space-x-4 mb-12">
                <button class="bg-white text-primary px-6 py-3 rounded-button font-medium whitespace-nowrap">Get Started Free</button>
                <button class="border border-white text-white px-6 py-3 rounded-button font-medium whitespace-nowrap">See Demo</button>
            </div>
            <div class="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
                <img src="https://readdy.ai/api/search-image?query=modern%20user%20interface%20for%20a%20link%20in%20bio%20tool%20showing%20a%20clean%20dashboard%20with%20profile%20preview%2C%20social%20media%20links%2C%20and%20analytics%20displayed%20on%20a%20laptop%20screen%20with%20blurred%20gradient%20background&width=800&height=450&seq=123&orientation=landscape" alt="LinkBio Dashboard Preview" class="w-full h-auto object-top"/>
            </div>
        </div>
    </section></div>
  )
}

export default Hero