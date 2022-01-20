import planet from '../../planet.svg';
function Header() {
  return (
    <aside className="lg:h-screen top-0 lg:sticky lg:w-1/2 w-screen flex flex-col pt-10">
      <div className='flex items-center justify-between lg:px-0 px-5'>
        <div className="flex items-center">
          <img src={planet} alt="logo" />
          <p className='pl-3'>Spacestagram 2022</p>
        </div>
        <div>
          <p>Made with ❤️ by Uyen Hoang</p>
        </div>
      </div>
      <div className='p-10'>
        <h1 className="text-2xl font-bold leading-tight lg:text-4xl lg:leading-none pb-5">Hello from the out of spaceeee!!!!🎶</h1>
        <h2 className='text-xl pb-5'>Welcome to the 2022 Instagram of space! Explore an astronomy picture of each day! 🌌</h2>
        <p>Each featured picture shows our fascinating and captivating universe in 2022 🪐. They come with an explanation 📝 written by a professional astronomer. Let them inspire you, amaze you, and remind you that there is more out in the cosmos waiting to be discovered! 🚀</p>
      </div>
      <div className='p-10'>
        <p>Resources:</p>
        <ul>
          <li>NASA Astronomy Picture of The Day (APOD) API. Explore more of their <a href='https://api.nasa.gov' className='text-blue-600 underline'>API</a>!</li>
          <li>Lorem Picsum - The Lorem Ipsum for photos. They are awesome! Check <a href='https://picsum.photos' className='text-blue-600 underline'>them</a> out!</li>
          <li>Styled with TailwindCSS</li>
          <li>Icon by <a href='https://www.figma.com/@Zoey' className='text-blue-600 underline'>Aboluo</a> on Figma</li>
        </ul>
      </div>
    </aside>
  )
}

export default Header;