import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
function Home() {
  const HomeWrapper = styled.div`
    width: 66%;
    height: 100vh;
    `
  const [error, setError] = useState(null)
  const token = localStorage.getItem('token')
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        setData(d.playlists.items);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <HomeWrapper>
    {data.map((el, index) => (
            <div el={el} key={index} className="gap-4 ">
              <div
                onClick={() => handleMusic(el.id, el)}
                className="w-[224px] p-5 rounded-lg  h-[324px] bg-[#1B1B1B] text-[#B3B3B3]"
              >
                <img
                  src={el.images[0].url}
                  alt={el.name}
                  className="w-[182px] h-[182px] rounded-lg "
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="text-[16px] text-white">{el.name}</h1>
                <h1>{el.id}</h1>
                <span className="tetx-[12px]">{el.description}</span>
                <div className="w-[182px] h-[182px]"></div>
              </div>
            </div>
          ))}

    </HomeWrapper>
  )
}

export default Home