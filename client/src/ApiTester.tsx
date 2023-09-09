import { ChangeEvent, useState } from 'react';
import axios from 'axios';

function ApiTester() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  const [oiberResponse, setOiberResponse] = useState(null);
  const [monicResponse, setMonicResponse] = useState(null);

  const handleUrlChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDataChange = (e:ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const testOiberEndpoint = async () => {
    try {
      const apiResponse = await axios.post('http://localhost:3000/oiber', {
        url,
        data,
      });

      setOiberResponse(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const testMonicEndpoint = async () => {
    try {
      const apiResponse = await axios.post('http://localhost:3000/monic', {
        url,
        data,
      });

      setMonicResponse(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const testGetOiberEndpoint = async () => {
    try {
      const apiResponse = await axios.get(`http://localhost:3000/oiber?url=${url}`);
      
      setOiberResponse(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const testGetMonicEndpoint = async () => {
    try {
      const apiResponse = await axios.get(`http://localhost:3000/monic?url=${url}`);
      
      setMonicResponse(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>API Tester</h2>
      <div>
        <label>
          URL:
          <input type="text" value={url} onChange={handleUrlChange} />
        </label>
      </div>
      <div>
        <label>
          Data:
          <input type="text" value={data} onChange={handleDataChange} />
        </label>
      </div>
      <div>
        <button onClick={testOiberEndpoint}>Test Oiber POST</button>
        <button onClick={testMonicEndpoint}>Test Monic POST</button>
        <button onClick={testGetOiberEndpoint}>Test Oiber GET</button>
        <button onClick={testGetMonicEndpoint}>Test Monic GET</button>
      </div>
      {oiberResponse && (
        <div>
          <h3>Oiber API Response:</h3>
          <pre>{JSON.stringify(oiberResponse, null, 2)}</pre>
        </div>
      )}
      {monicResponse && (
        <div>
          <h3>Monic API Response:</h3>
          <pre>{JSON.stringify(monicResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiTester;
