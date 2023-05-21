from tensorflow.keras.preprocessing.text import Tokenizer
import pickle

fakeTokenizer_max_features = 10000
fakeTokenizer = Tokenizer(fakeTokenizer_max_features)
# load the saved tokenizer
with open('/home/husnain/MyThings/Data/Faizan FYIP/models/tokenizer.pkl', 'rb') as f:
    fakeTokenizer = pickle.load(f)


abusiveTokenizer_max_features = 13522
abusiveTokenizer = Tokenizer(abusiveTokenizer_max_features)

# load the saved tokenizer
with open('/home/husnain/MyThings/Data/Faizan FYIP/models/tokenizerOf_ToxicModel.pkl', 'rb') as f:
    abusiveTokenizer = pickle.load(f)
