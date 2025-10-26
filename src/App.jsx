import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Twitter, Github, Mail } from 'lucide-react'

function App () {
  const [ Open, setOpen ] = useState(false);

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between relative">
        <p className="ml-4 font-extrabold text-2xl text-gray-900">&#127757;GreenLab&#129514;</p>
        <button
          onClick={() => setOpen(!Open)}
          className='mr-6'>
          {Open ? <X /> : <Menu /> }
          {Open && (
            <div className='absolute top-0 right-0 h-screen w-full flex flex-col items-center justify-between bg-gray-50'>
              <nav className='mt-[80px] h-[400px] flex flex-col justify-evenly text-gray-600'>
                <p className='text-sm font-extrabold hover:underline'>About</p>
                <p className='text-sm font-extrabold hover:underline'>Donate</p>
                <p className='text-sm font-extrabold hover:underline'>Contact</p>
                <p className='text-sm font-extrabold hover:underline'>Support</p>
              </nav>
              <button className='w-[95vw] h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-sm font-semibold'>Get Started</button>
            </div>
          )}
        </button>
      </header>

      <p className='mt-20 ml-3 mr-5 font-semibold text-lg text-gray-600'>Your trusted eco-friendly household chemical checker. Balancing science, safety and sustainability for healthier families and a greener planet.</p>
      <p className='mt-4 ml-3 font-semibold text-lg text-gray-600'>Protecting families&#127969;, Preserving nature&#127793;.</p>
      <button className='block mt-8 mx-auto w-[90vw] h-16 bg-green-600 hover:bg-green-700 text-white rounded-3xl font-semibold text-sm'>Get Started</button>

       <div className="mx-auto mt-20 w-[85vw] border-b border-gray-300"></div>

      <div className='h-32 w-full flex items-center justify-evenly'>
        <div className='w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center text-gray-600 hover:text-black'>
          <a href='mailto:isijolaayomikun04@gmail.com'><Mail/></a>
        </div>
        <div className='w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center text-gray-600 hover:text-black'>
          <a href='https://github.com/Hub-devAnthony'><Twitter/></a>
        </div>
        <div className='w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center text-gray-600 hover:text-black'>
          <a href='https://x.com/_anthony_yk'><Github/></a>
        </div>
      </div>

      <p className="mt-6 ml-10 font-extrabold text-2xl text-gray-900">GreenLab</p>

      <div className='mt-6 flex flex-row justify-center gap-[30vw] text-gray-600'>
        <div className='h-40 w-32 flex flex-col space-y-6 justify-start'>
          <p className='text-sm font-extrabold hover:underline'>Donate</p>
          <p className='text-sm font-extrabold hover:underline'>Support</p>
          <p className='text-sm font-extrabold hover:underline'>Feedback</p>
          <p className='text-sm font-extrabold hover:underline'>Disclaimer</p>
        </div>

        <div className='h-40 w-32 flex flex-col space-y-6 justify-start'>
          <p className='text-sm font-extrabold'>Who we are?</p>
          <p className='text-sm font-bold hover:underline'>About</p>
          <p className='text-sm font-bold hover:underline'>FAQS</p>
          <p className='text-sm font-bold hover:underline'>Privacy</p>
        </div>
      </div>

      <div className='mt-10 flex flex-row justify-center gap-[30vw] text-gray-600'>
        <div className='h-40 w-32 flex flex-col space-y-6 justify-start'>
          <p className='text-sm font-extrabold'>Use GreenLab</p>
          <p className='text-sm font-bold hover:underline'>Andriod</p>
          <p className='text-sm font-bold hover:underline'>iphone</p>
          <p className='text-sm font-bold hover:underline'>Mac/PC</p>
        </div>

        <div className='h-40 w-32 flex flex-col space-y-6 justify-start'>
          <p className='text-sm font-extrabold'>Need help?</p>
          <p className='text-sm font-bold hover:underline'>Contact</p>
          <p className='text-sm font-bold hover:underline'>Help Center</p>
          <p className='text-sm font-bold hover:underline'>Terms of Services</p>
        </div>
      </div>

      <div className="mx-auto mt-12 w-[85vw] border-b border-gray-300"></div>

      <footer className="mt-6 mb-6 text-center font-extrabold text-base text-gray-600">GreenLab. &copy; 2025</footer>
    </>
  )
}


export default App;