import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      

      <div className="py-5 ">
        <div className="container">
          <div className="flex items-center justify-between ">
            <nav className=" navbar hidden md:flex gap-6 text-white/60 items-center">
              <a href="#hero" >About</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Expertise</a>
              <a href="tel:+919994566311"><button className="btn bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get in Touch
              </button></a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header