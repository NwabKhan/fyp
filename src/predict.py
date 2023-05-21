from flask import Blueprint, request, session
from models import abusiveModel, FakeModel
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tokenizer import fakeTokenizer, abusiveTokenizer
import numpy as np
from voicetotext import listen
from upload import allowed_file

predictBp = Blueprint('predict', __name__)

@predictBp.route('/faketext/', methods = ['POST'])
def fakeText():

    if('text' not in request.json):
        return "Please Provide Text", 400

    text = request.json['text']

    max_len = 250
    tokenized_sentences = fakeTokenizer.texts_to_sequences([text])   

    train_padding = pad_sequences(tokenized_sentences, max_len)

    prediction = FakeModel.predict(train_padding)

    # Print the prediction
    if prediction > 0.5:
        print("The sentence is classified as fake.")
        return "false", 200
    else:
        print("The sentence is classified as real.")
        return "true", 200


@predictBp.route('/fakevoice/', methods = ['POST'])
def fakeVoice():

    if('file' not in request.files):
        return "Please Provide Audio File in wav format", 400

    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        return "No File Selected", 400

    if not allowed_file(file.filename):
        return "Please Select Wav format only", 400

    text = listen(file)
    if(text == "Sorry"): 
        return "Voice could not be recognised", 400

    max_len = 250
    tokenized_sentences = fakeTokenizer.texts_to_sequences([text])   

    train_padding = pad_sequences(tokenized_sentences, max_len)

    prediction = FakeModel.predict(train_padding)

    # Print the prediction
    if prediction > 0.5:
        print("The sentence is classified as fake.")
        return "false", 200
    else:
        print("The sentence is classified as real.")
        return "true", 200




@predictBp.route('/toxictext/', methods = ['POST'])
def toxicText():
    if('text' not in request.json):
        return "Please Provide Text", 400

    text = request.json['text']

    max_len = 250
    tokenized_sentences = abusiveTokenizer.texts_to_sequences([text])   

    train_padding = pad_sequences(tokenized_sentences, max_len)

    prediction = abusiveModel.predict(train_padding)

    id = np.argmax(prediction)

    if id == 0:
        return "normal", 200
    if id == 1:
        return "abusive", 200
    if id == 2:
        return "threat", 200

    return "none", 200


@predictBp.route('/toxicvoice/', methods = ['POST'])
def toxicVoice():

    print(request.files)

    if('file' not in request.files):
        return "Please Provide Audio File in wav format", 400

    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        return "No File Selected", 400

    if not allowed_file(file.filename):
        return "Please Select Wav format only", 400


    text = listen(file)
    if(text == "Sorry"): 
        return "Voice could not be recognised", 400

    max_len = 250
    tokenized_sentences = abusiveTokenizer.texts_to_sequences([text])   

    train_padding = pad_sequences(tokenized_sentences, max_len)

    prediction = abusiveModel.predict(train_padding)

    id = np.argmax(prediction)

    if id == 0:
        return "normal", 200
    if id == 1:
        return "abusive", 200
    if id == 2:
        return "threat", 200

    return "none", 200