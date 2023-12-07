export default function App() {
  return (
    <>
      <div className="w-[1440px] mx-auto relative">

        <header className="w-[1440px] h-[60px] flex justify-between items-center mx-auto fixed z-50">
          <ul className="flex justify-between items-center gap-5">
            <li className="text-purple-800 font-medium">Home</li>
            <li className="text-purple-800 font-medium">About</li>
            <li className="text-purple-800 font-medium">Contact</li>
          </ul>

          <a href="#" className="logo text-2xl font-extrabold text-purple-800 block">Landing</a>

          <button className="bg-purple-800 text-white text-base px-20 pt-2 pb-2 whitespace-nowrap">Buy now</button>
        </header>

        <section className="pt-96">
          <div className="bg-hero w-[1027px] h-[920px] bg-no-repeat right-[0] top-0 absolute"></div>
            <div className="w-[420px] absolute z-10">
              <div className="font-extrabold text-4xl text-purple-700  pb-4">Introduce Your Product Quickly & Effectively</div>
              <p className="text-sm text-purple-600 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum!</p>
              <p className="text-sm text-purple-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
           
              <div className="flex gap-5 pt-36">
                <button className="bg-purple-800 text-white text-base px-16 pt-1 pb-1 whitespace-nowrap">Buy now</button>
                <button className="bg-white border-solid border-2 border-purple-800 text-purple-800 text-base px-16 pt-1 pb-1 whitespace-nowrap">Learn more</button>
              </div>
            </div>

        </section>

        <section className="pt-[700px]">
          <div className="flex justify-between items-center">
            <div className="mt-[1%]">
              <div className="font-extrabold text-4xl text-gray-700  pb-4">Light, Fast & Powerful</div>
              <p className="text-base w-[80%] text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
              <p className="text-base w-[80%] text-gray-700">Lorem, Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
           
              <div className="flex gap-5 w-[80%]">
                <div className="mt-20">
                  <img src="/src/assets/images/Left.png" className="pb-4" alt="" />
                  <div className="font-bold text-xl text-gray-700  pb-4">Title Goes Here</div>
                  <p className="text-sm text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit Molestias deleniti modi laudantium t tempor</p>
                  
                </div>
                <div className="mt-20">
                  <img src="/src/assets/images/Left.png" className="pb-4" alt="" />
                  <div className="font-bold text-xl text-gray-700 pb-4">Title Goes Here</div>
                  <p className="text-sm text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
                
                </div>

              </div>
            </div>

            <img src="/src/assets/images/card.png" className="" width={453} height={433} alt="" />

          </div>
        
        </section>

        <section className="pt-[100px]">
          <div className="flex justify-between items-center">
          <img src="/src/assets/images/card.png" className="mr-[300px]" width={453} height={433} alt="" />
            <div className="mt-[1%]">
              <div className="font-extrabold text-4xl text-gray-700  pb-4">Light, Fast & Powerful</div>
              <p className="text-base w-[80%] text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
              <p className="text-base w-[80%] text-gray-700">Lorem, Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
            </div>
          </div>
        </section>

        <section className="pt-[200px]">
          <div className="flex justify-between items-center">
          <img src="/src/assets/images/undraw_happy_news_hxmt.png" className="mr-[300px]" width={453} height={433} alt="" />
            <div className="mt-[1%]">
              <div className="font-extrabold text-4xl text-gray-700  pb-4">Light, Fast & Powerful</div>
              <p className="text-base w-[80%] text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
              <p className="text-base w-[80%] text-gray-700">Lorem, Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
            </div>
          </div>
        </section>

        <section className="pt-[200px] pb-[200px]">
          <div className="flex justify-between items-center">
          <img src="/src/assets/images/undraw_social_influencer_sgsv.png" className="mr-[300px]" width={453} height={433} alt="" />
            <div className="mt-[1%]">
              <div className="font-extrabold text-4xl text-gray-700  pb-4">Light, Fast & Powerful</div>
              <p className="text-base w-[80%] text-gray-700 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
              <p className="text-base w-[80%] text-gray-700">Lorem, Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor ipsum dolor sit amet consectetur adipisicing elit. At, eos!</p>
            </div>
          </div>
        </section>

        <section className="bg-purple-800 pt-40 pb-40">
          <div className="mx-auto text-center w-[400px]">
            <div className="font-extrabold text-4xl text-white pb-4">Light, Fast & Powerful</div>
            <p className="text-base text-white pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempore ipsum! Molestias deleniti modi laudantium mollitia vero qui harum sint reprehenderit tempor</p>
          </div>
        </section>

      </div>



    </>
  )
}