import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-[44vh] md:text-base text-xs">
        <div className="flex items-center justify-center font-bold text-3xl gap-6 md:gap-20">Get me a Chai<span><img className="invertImg" src="./chai.gif" width={88} /></span></div>
        <p>A crowdfunding platform for creators to fund their projects.</p>
        <div>A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</div>
        <div>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <div className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</div>
        <div className="flex gap-5 justify-around items-center">
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img src="./man.gif" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="text-center font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img src="./coin.gif" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="text-center font-bold">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item flex flex-col items-center justify-center space-y-3">
            <img src="./group.gif" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="text-center font-bold">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <div className="text-3xl font-bold text-center mb-14">Learn more about us</div>
        <div className="flex gap-5 justify-around items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pD-Ei9veejU?si=q1w4oKsmgTlCZBAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}
