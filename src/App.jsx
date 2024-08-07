import React, { useState, useEffect } from 'react';
import Logo from './assets/old_mutual_logo.jpg'; ///src/assets/old_mutual_logo.jpg 

function App({props}) {
  const [advisor, setAdvisor] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setAdvisor(searchParams.get('advisor'));

    fetch('https://api.finqual.io/docuseal/completed',{
      method: 'post',
      body: JSON.stringify({ phoneNumber: searchParams.get('phoneNumber') }),
      headers: { 'Content-Type': 'application/json' },
    }).then(resp=>resp.json()).then(resp=>setDownloadLink(resp.data.docUrl));
  }, []);
  
  return (
    <>
      <div className="h-screen">
        <div className="fixed left-0 w-1/12 h-1/4 p-4">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="fixed right-0 w-5/6 h-1/4">
          <div className="h-full w-full content-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-right">VAN ZYL & ASSOCIATES</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-right">Old Mutual Personal Financial Advice</p>
          </div>
        </div>

        <div className="h-screen content-center">
          <div className="w-2/3 md:w-1/2 lg:w-1/2 m-auto flex justify-center border-2 border-black rounded-lg p-5 bg-white/[.8] shadow-2xl">
            <div className="flex-col space-y-5">
              <div>
                <p className="text-sm lg:text-lg font-bold text-black text-left pb-4">
                  Thank you for your consent - kindly revert back to whatsapp to continue. <br/><br/>
                  Dankie vir u toestemming - vewys terug na whatsapp om voort te gaan. 
                </p>
              </div>
              <div className="flex justify-center">
                <a className="w-full text-md lg:text-2xl p-4 font-bold text-black text-left border-2 border-black bg-green-600 text-center active:scale-95" href={downloadLink}>
                  Download Copy
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-0 w-full h-1/6 py-5 pl-4">
          <div className="h-full w-11/12">
            <div className="w-2/3 border-2 border-black rounded-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-left bg-gray-400 p-2">{advisor}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
