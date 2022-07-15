
function About() {
  return (
    <div className="granpa bg-green-300 relative object-cover h-screen w-screen">
    <div className="parent bottom-1/2 right-1/2 bg-red-500 absolute">
        <h1>Parent</h1>
    </div>

    <div className="child absolute bottom-10 right-10">
        <h1>Child</h1>
    </div>
    
    </div>
  )
}

export default About