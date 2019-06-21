import os

from sklearn.datasets import load_digits
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.externals import joblib


digits = load_digits()

"""
digits.data[digits.data >= 1] = 1
digits.data[digits.data < 1] = 0
"""

X_train, X_test, y_train, y_test = train_test_split(digits.data, digits.target, test_size=.1)

# Preprocessing is skipped since it doesn't add anything to accuracy
"""
scaler = MinMaxScaler()
X_train, X_test = scaler.fit_transform(X_train), scaler.transform(X_test)

encoder = OneHotEncoder(categories='auto')
y_train, y_test = encoder.fit_transform(y_train[:, None]), encoder.transform(y_test[:, None])
"""

print('Training ...')
model = MLPClassifier(max_iter=1000, hidden_layer_sizes=[100], alpha=.1, learning_rate_init=.01, random_state=12)
model.fit(X_train, y_train)

print('Cross validation score:', cross_val_score(model, digits.data, digits.target, cv=5).mean())
print()
print(model)

print('Save model ...')
joblib.dump(model, 'model.pkl')

print('Done.')
