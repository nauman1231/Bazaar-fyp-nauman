# -*- coding: utf-8 -*-
"""
Created on Tue Feb 11 14:00:18 2020

@author: Salman Sheikh
"""


from flask import Flask, render_template, request,jsonify
from flask import send_from_directory

import cv2
import numpy as np
from flask import Flask,jsonify

from flask import render_template
from datetime import time
import pandas as pd



import matplotlib.pyplot as plt
from google.cloud import vision
from google.cloud.vision import types
import os
import io
from flask_cors import CORS, cross_origin
import json
app = Flask(__name__)
app.config["DEBUG"] = True
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
dir_path = os.path.dirname(os.path.realpath(__file__))
# dir_path = os.path.abspath("/")

UPLOAD_FOLDER = dir_path + '/uploads'
# STATIC_FOLDER = dir_path + '/static'
# UPLOAD_FOLDER = dir_path

STATIC_FOLDER = 'lays'

def run(filename):
    print("nauman "+filename)
    os.environ['GOOGLE_APPLICATION_CREDENTIALS']=r'C:\Users\Salman Sheikh\Desktop\lays\precise-space-268214-6c051b2cd072.json'
    client=vision.ImageAnnotatorClient()

    # filename=r'C:\Users\Salman Sheikh\Desktop\lays\classic1.jpg'

    with io.open(filename, 'rb') as image_file:
        content = image_file.read()
        
    image=vision.types.Image(content=content)

    response=client.text_detection(image=image)
    texts = response.text_annotations

    response_labels = client.label_detection(image=image)
    labels = response_labels.label_annotations
    
    return texts,labels


    

    # for text in texts:
        
        
    
    
        
    #     if text.description=="lays":
            
    #         print('\n"{}"'.format(text.description))
    #         te=text.description
            
            
    #         vertices = (['({},{})'.format(vertex.x, vertex.y)
    #         for vertex in text.bounding_poly.vertices])
    #         print('bounds: {}'.format(','.join(vertices)))
    #         print("naumanaaa jayy="+te)
    #         return te

#     if response.error.message:
#         raise Exception(
#             '{}\nFor more info on error messages, check: '
#             'https://cloud.google.com/apis/design/errors'.format(
#                 response.error.message))

    

@app.route('/', methods=['GET'])

def home():
   return render_template('index.html')

@app.route('/upload', methods=['POST','GET'])
def upload_file():

    if request.method == 'GET':
        return render_template('index.js.html')
    else:
        file = request.files['image']
    
        full_name = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(full_name)
        
       
        
        
        match_path,labels=run(full_name)
        

        
        print(labels[2].description)
     
        # '\n"{}"'.format(text.description)
        dataret='{} {}'.format(match_path,labels)
        Names = []
        Category = []
        for x in range(5):
            Names.append(match_path[x].description)
            
        for x in range(5):
            Category.append(labels[x].description)


    return jsonify({'match_path':Names,'labels':Category})

@app.route('/uploads/<filename>')
def send_file(filename):
    base=os.path.basename(filename)
    print("mei hon base"+base)
    return send_from_directory(STATIC_FOLDER, base)
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

@app.route("/month",methods=['GET'])
def month():
    id=request.args.get('id')
    print(id)
    linkname = '/Users/Salman Sheikh/desktop/ml AND data/monthly.csv'
    train = pd.read_csv(linkname, sep = ',')
    
    train['date'] = pd.to_datetime(train['date']) - pd.to_timedelta(7, unit='d')
    df=train.groupby(['family', pd.Grouper(key='date', freq='W')])['unit_sales'].sum().sort_values(ascending=False).reset_index()
    df['Month']=df['date'].dt.month
    df['Year']=df['date'].dt.year
    yearly=df['Year']==2011 
    monthly=df['Month']==int(id)
    filtered=df.where(yearly & monthly).dropna().reset_index()

    label=[]
    su=[]
    
    cleaned=filtered.groupby('family')['unit_sales'].sum().sort_values(ascending=False)
    name=cleaned.index
    values=cleaned
    for x in range(5):
        label.append(name[x])
    for x in range(5):
        su.append(values[x])
    
    print(label)
    return jsonify({'labels': label,'values':su})


# average_sales = strain.groupby('date')["unit_sales"].mean()
# print(average_sales)



CORS(app, expose_headers='Authorization')
app.run()
