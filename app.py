from flask import Flask, request, render_template, redirect, url_for
import requests
from math import ceil
from datetime import datetime, date
import calendar
import time

app = Flask(__name__)

url = "http://api.openweathermap.org/data/2.5/weather?q="
API_key = "32e14db0166427e73be3715bc6117f6b"

@app.route("/", methods=["GET", "POST"])
def index():

    """ For date and time """
    now = datetime.now()

    current_time = now.strftime("%H:%M:%S")

    today = date.today()
    today_date = today.strftime("%B %d, %Y")

    another_date = today.strftime("%d %m %Y")
    this_day = datetime.strptime(another_date, '%d %m %Y').weekday()
    day = calendar.day_name[this_day]

    if request.method == "POST":
        city_name = request.form.get("city")

        data = requests.get(url+city_name+'&appid='+API_key).json()
        
        if not data['cod'] == "404":
            city = data['name']
            country = data['sys']['country']
            temperature = ceil(data['main']['temp_max'] - 273.15)
            feels = ceil(data['main']['feels_like'] - 273.15)
            weather = data['weather'][0]['main']
            weather_desc = data['weather'][0]['description']
            wind_speed = float(data['wind']['speed'])
            humidity = data['main']['humidity']
            pressure = data['main']['pressure']
        else:
            error = "City not found"
            print(error)
        return render_template("index.html", current_time=current_time, today_date=today_date, day=day, city=city, country=country, temp=temperature, feels=feels, weather=weather, weatherdesc=weather_desc, windspeed=wind_speed, humidity=humidity, pressure=pressure)
    else:
        return render_template("index.html", current_time=current_time, today_date=today_date, day=day, city="None", country="None", temp=0, feels=0, weather="None", weatherdesc="None", windspeed=0, humidity=0, pressure=0)
