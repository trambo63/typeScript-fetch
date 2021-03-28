import React from 'react';
import WeatherDisplay from './WeatherDisplay';
type WeatherState = {
    temp: number,
    feelsLike: number,
    description: string,
    city: string
}

export default class Index extends React.Component<{}, WeatherState> {
    constructor(props: {}){
        super(props)
        this.state = {
            temp: 0,
            feelsLike: 0,
            description: "",
            city: ""
        }
    }

    componentDidMount() {
        console.log('mount');
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((postion) => {
                let myLat = Math.round(postion.coords.latitude);
                let myLon = Math.round(postion.coords.longitude);
                console.log("fetch")
                let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&APPID=23467fc4ff5f97589f94669c40eee388&units=imperial`
                console.log(url)
                fetch(url)
                .then(res => res.json())
                .then(json => this.setState({
                    temp: json.main.temp,
                    feelsLike: json.main.feels_like,
                    description: json.weather[0].description,
                    city: json.name
                }));

            })
        } else {
            window.alert('location is not supported');
        }
    }

    render(){
        return(
            <div>
                <WeatherDisplay temp={this.state.temp} feelsLike={this.state.feelsLike} description={this.state.description} city={this.state.city} />
            </div>
        )
    }
}