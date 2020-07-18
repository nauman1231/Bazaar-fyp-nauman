from flask import Flask,jsonify

from flask import render_template
from datetime import time
import pandas as pd
from flask_cors import CORS, cross_origin
app = Flask(__name__)


@app.route("/simple_chart",methods=['GET'])
def chart():
    linkname = '/Users/Salman Sheikh/desktop/ml AND data/smallData.csv'
    dataset1 = pd.read_csv(linkname, sep = ',')
    store_number = dataset1.groupby('family')["unit_sales"].sum().sort_values(ascending=False)
    legend = 'Monthly Data'
    labels = store_number.index
    
    values = store_number
    Names = []
    value = []
    for x in range(5):
        Names.append(labels[x])
        print(labels[x])
    for x in range(5):
        value.append(values[x])
        print(values[x])
   
    return jsonify({'labels': Names,'values':value})


@app.route("/line_chart",methods=['GET'])
def line_chart():
    
    linkname = '/Users/Salman Sheikh/desktop/ml AND data/smallData.csv'
    dataset1 = pd.read_csv(linkname, sep = ',')
    average_sales = dataset1.groupby('Month')["unit_sales"].mean()
    labels=['January', 'February', 'March',
           'April', 'May','June','July','August','September','October','November','December']
    values = average_sales
    print(values)
    Month = []
    Sales = []
    for x in range(12):
        Month.append(labels[x])
        print(labels[x])
    for x in range(1,13):
        Sales.append(values[x])
        print(values[x])
    return jsonify({'labels': Month,'values':Sales})



if __name__ == "__main__":
    CORS(app, expose_headers='Authorization')
    app.run(debug=True)
