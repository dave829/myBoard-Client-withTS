import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export const Weather = () => {
  const API_KEY = "886705b4c1182eb1c69f28eb8c520e20"; //API 에러가 나서 공홈봤더니 키발급 이후에 몇시간이 지나야 하나보군요..
  const [location, setLocation] = useState("");
  const [result, setResult] = useState([]);
  //console.log(result);
  //console.log(result.length !== 0 && result.data.name);
  //console.log(result.length !== 0 && result.data.main.temp);
  //console.log(result.length !== 0 && result.data.weather[0].description);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        //console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <WeatherWrapper>
      <div className="appContentWrap">
        <input
          className="weatherInput"
          type="text"
          placeholder="write your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          //type="text"
          onKeyDown={searchWeather}
        />
        {result.length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temp">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}C
            </div>
            <div className="sky">{result.data.weather[0].description}</div>
          </ResultWrap>
        )}

        {/* {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temp">{result.data.main.temp}</div>
            <div className="sky">{result.data.weather[0]}</div>
          </ResultWrap>
        )} */}
      </div>
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  //border: 2px solid red;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    //border: 2px solid blue;
    padding: 20px;
    color: #fff;

    .weatherInput {
      padding: 16px;
      border: 2px solid #fff;
      border-radius: 16px;
      caret-color: black;
      color: black;
    }
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 8px;

  .city {
    font-size: 24px;
  }

  .temp {
    font-size: 60px;
    margin-top: 8px;
  }

  .sky {
    font-size: 20px;
    margin-top: 8px;
    text-align: right;
  }
`;
