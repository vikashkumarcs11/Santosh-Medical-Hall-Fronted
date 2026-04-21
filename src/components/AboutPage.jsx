// AboutPage Component
const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section of About */}
      <div className="relative bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium shadow-sm mb-6">
            <span>🌟 Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Crafting Digital Excellence Since{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">2020</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            SMH is more than a tech company — we're your strategic partner in the digital age, 
            dedicated to building products that make a difference.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-sm border border-blue-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-5">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize cutting-edge technology and empower businesses with intuitive, 
              scalable, and future-ready digital solutions that drive measurable growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-sm border border-green-100">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-5">👁️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a global benchmark for digital innovation, where human creativity 
              and advanced technology coexist seamlessly to solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Core Values</h2>
            <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Innovation First', desc: 'Constantly pushing boundaries', icon: '💡' },
              { title: 'Radical Honesty', desc: 'Transparent communication', icon: '🤝' },
              { title: 'Client Obsession', desc: 'Your success is our success', icon: '❤️' },
              { title: 'Sustainable Growth', desc: 'Building for the long term', icon: '🌱' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border border-gray-100">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Minds Behind SMH</h2>
          <p className="text-gray-500 mt-2">Passionate creators & tech enthusiasts</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Sarah M. Hasan', role: 'CEO & Founder', initials: 'SH', gradient: 'from-blue-500 to-blue-600' },
            { name: 'Rafiq Mahmud', role: 'CTO', initials: 'RM', gradient: 'from-green-500 to-green-600' },
            { name: 'Lina Akter', role: 'Head of Design', initials: 'LA', gradient: 'from-blue-400 to-green-500' },
          ].map((member, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className={`h-40 bg-gradient-to-r ${member.gradient} flex items-center justify-center`}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  {member.initials}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-3">Passionate about creating impactful digital experiences.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-3">Ready to Start Your Project?</h2>
          <p className="text-blue-50 max-w-lg mx-auto mb-6">Let's create something extraordinary together.</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
            Contact Us Today →
          </button>
        </div>
      </div>
    </main>
  );
};


export default AboutPage