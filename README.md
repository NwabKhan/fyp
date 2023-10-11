# fyp

1- Setup the virtual environment by writing these commands:

 	 Set-ExecutionPolicy Unrestricted -Scope Process

  	python -m venv env

 	 .\env\Scripts\Activate.ps1


2- Now set the file paths in models.py and tokenizer.py as your pc

3- Install these: 

 	 pip install flask

 	 pip install tensorflow

 	 pip install SpeechRecognition

	pip install flask_cors

	pip install waitress


Now you are done. Go to /src and type:

	python waitress_server.py
