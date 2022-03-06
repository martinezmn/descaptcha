import json
import sys
import pydub
import urllib
from speech_recognition import Recognizer, AudioFile
import os

path = os.path.abspath(os.getcwd())
src = sys.argv[1]

urllib.request.urlretrieve(src, path+"\\audio.mp3")

sound = pydub.AudioSegment.from_mp3(
    path+"\\audio.mp3").export(path+"\\audio.wav", format="wav")

recognizer = Recognizer()

recaptcha_audio = AudioFile(path+"\\audio.wav")

with recaptcha_audio as source:
    audio = recognizer.record(source)

text = recognizer.recognize_google(audio, language="en-US")

print(json.dumps(text))
