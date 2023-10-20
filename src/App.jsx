import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    setData(newTours)
  }

  const fetchdata = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const info = await resp.json();
      setData(info)
    }
    catch (error) {

      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchdata();
  }, [])

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if (data.length === 0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button type="button" style={{ marginTop: '2rem' }} className="btn" onClick={() => fetchdata()}>Refresh</button>
      </div>
    </main>
  }


  return <main>
    <Tours data={data} removeTour={removeTour} />
  </main>;
};
export default App;
