import React from 'react'

const about = () => {
  return (
    <div className=''>
      <div className='md:max-w-1/3 md:mx-auto mx-2 p-6 bg-blue-100 my-6 border flex flex-col gap-6 rounded-xl items-center'>
        <h2 className='font-bold text-xl text-gray-800'>About This Project</h2>
        <p className='text-md'>This is just a hobby project that I made when I was learning nextJS. Eventhough it's a hobby project it still works perfectly fine, you can absolutely this to create short URLs. This project mainly uses mongoDB to store and map shortlinks and actual urls. If you like this project you can star it on my Github and if you want to make any changes than suggestions are absolutely welcome.</p>
        <h2 className='font-bold text-xl text-gray-800'>About Me</h2>
        <p className='text-md'>I am a Software Engineering Student currently working on a few different projects while also trying to find a Job 😅. I am currently working on web Technology and if you could you should also checkout my other projects on my Github. If you want to talk about something you can always reach out to me on my email.<br /><span className='font-bold'>Email: daksh.official9705@gmail.com</span></p>
      </div>
    </div>
  )
}

export default about

export const metadata = {
  title: 'About - LinkBytes',
}
 