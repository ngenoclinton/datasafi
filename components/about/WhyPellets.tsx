import React from 'react'
import {CheckCircle } from "lucide-react";

const WhyPellets = () => {
  return (
    <div className='w-full'>
      <section className="py-20 bg-[#092c3f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Data Safi?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              What makes us the right choice for your data analytics needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Industry Experts
              </h3>
              <p className="text-white/80">
                Industry experts with a track record in analytics delivery
              </p>
            </div>

            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Human-Centric
              </h3>
              <p className="text-white/80">
                Human-centric reporting that adapts to your needs
              </p>
            </div>

            <div className="bg-[#092c3f]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-[#092c3f]/60 transition-colors">
              <div className="mb-6 text-[#e8ff8d]">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commitment</h3>
              <p className="text-white/80">
                Commitment to clarity, security, and business impact
              </p>
            </div>
          </div>
        </div>
      </section> 

    </div>
  )
}

export default WhyPellets
