from predict import predictBp
from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
app.register_blueprint(predictBp, url_prefix='/predict')

    
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=3000)