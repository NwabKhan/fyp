# fyp
follow these commands to setup:

Setup the virtual environment:
Set-ExecutionPolicy Unrestricted -Scope Process
python -m venv env
.\env\Scripts\Activate.ps1

Now set the files paths in models.py and tokenizer.py as your pc

Install these: 
pip install flask
pip install tensorflow
pip install SpeechRecognition
pip install flask_cors
pip install waitress

Now you are done. Go to /src and type:
python waitress_server.py
