import React from 'react'
import Weather from './Weather';

type Props = {
    temp: number,
    feelsLike: number,
    description: string,
    city: string
}

const WeatherDisplay: React.FunctionComponent<Props> = ({temp, feelsLike, description, city}) => {
    return (
        <div>
            <h1>{city}</h1>
            <h2>Current Temp: {temp}</h2>
            <h3>Feels Like: {feelsLike}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default WeatherDisplay
