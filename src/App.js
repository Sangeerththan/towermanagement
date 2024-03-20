import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://lcm-solutions.appiancloud.com/suite/tempo/ui/sail-client/embeddedBootstrap.nocache.js';
    script.id = 'appianEmbedded';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    <iframe src="https://lcm-solutions.appiancloud.com/suite/sites/tower-management-system/page/home" width="100%" height="600px" frameborder="0" title="towermanagement"></iframe>
      </div>
  );
}

export default App;

