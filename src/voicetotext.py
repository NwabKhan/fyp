import speech_recognition as sr

def listen(audio):
  r = sr.Recognizer()
  audio_file = sr.AudioFile(audio)
  with audio_file as source:
    audio = r.record(source)
    try:
        text = r.recognize_google(audio, language='ur')
        return text
    except:
        return "Sorry"