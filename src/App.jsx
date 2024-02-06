import Title from "./components/title"

function App() {
  return (
    <>
    <div className="w-full h-fit bg-gradient-to-t from-slate-800 to-slate-600 p-5">
      <Title />
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white/20 rounded w-[250px] h-[250px] p-3">
            {/* image */}
            <img src={'/public/img1.jpg'} alt="" />
            {/* button box */}
            <div className="flex items-center justify-center ">
              <button className="mx-2 bg-slate-50 p-2 rounded">Live Demo</button>
              <button className="mx-2 bg-slate-50 p-2 rounded">See Code</button>
            </div>
          </div>
          <div className="bg-red-200 rounded w-[250px] h-[250px]">box-2</div>
          <div className="bg-green-200 rounded w-[250px] h-[250px]">box-3</div>
          <div className="bg-green-200 rounded w-[250px] h-[250px]">box-4</div>
          
          <div className="bg-white/20 rounded w-[250px] h-[250px] p-3">
            {/* image */}
            <img src={'/public/img1.jpg'} alt="" />
          </div>
          <div className="bg-red-200 rounded w-[250px] h-[250px]">box-2</div>
          <div className="bg-green-200 rounded w-[250px] h-[250px]">box-3</div>
          <div className="bg-green-200 rounded w-[250px] h-[250px]">box-4</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
