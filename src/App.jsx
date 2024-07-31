function App({props}) {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  
  
  return (
    <>
      <div className="h-screen">
        <div className="fixed right-0 w-full h-1/4">
          <div className="h-full w-11/12 content-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-right">VAN ZYL & ASSOCIATES</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-right">Old Mutual Personal Financial Advice</p>
          </div>
        </div>

        <div className="h-screen content-center">
          <div className="w-2/3 md:w-1/2 lg:w-1/3 m-auto flex justify-center border-2 border-black rounded-lg p-10 bg-black/[.6] shadow-2xl">
            <div className="flex-col space-y-3">
              <p className="text-sm lg:text-xl font-bold text-white text-left pb-4">
                Thank you, we received your consent letter. We will message you shortly with further information. <br/><br/>
                Dankie vir u konsent dokument, ons gaan binnekort u boodskap vir verdere inligting.
              </p>
              <button className="w-full text-md lg:text-2xl p-4 font-bold text-black text-left border-2 border-black bg-green-600 text-center active:scale-95">
                Download Copy
              </button>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-0 w-full h-1/6 pt-10 pl-4">
          <div className="h-full w-11/12">
            <div className="w-2/3 border-2 border-black rounded-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-left bg-gray-400 p-2">Francois Basson</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
