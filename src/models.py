from tensorflow.keras.models import load_model

abusiveModel = load_model('/home/husnain/MyThings/Data/Faizan FYIP/models/Abusive_Threat_model.hdf5')
abusiveModelWeights = load_model('/home/husnain/MyThings/Data/Faizan FYIP/models/Abusive_Threat_model.hdf5').get_weights()
abusiveModel.set_weights(abusiveModelWeights)


FakeModel = load_model('/home/husnain/MyThings/Data/Faizan FYIP/models/Fake_content_model.hdf5')
FakeModelWeights = load_model('/home/husnain/MyThings/Data/Faizan FYIP/models/Fake_content_model.hdf5').get_weights()
FakeModel.set_weights(FakeModelWeights)
