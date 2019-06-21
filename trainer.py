from sklearn.datasets import load_digits
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.externals import joblib
import sklearn_porter


digits = load_digits()
X_train, X_test, y_train, y_test = train_test_split(digits.data, digits.target, test_size=.1)

print('Training ...', end=' ')
model = MLPClassifier(max_iter=1000, hidden_layer_sizes=[100], alpha=.1, learning_rate_init=.01, random_state=12)
model.fit(X_train, y_train)
print('done')

print('Testing ...')
print('Cross validation score:', cross_val_score(model, digits.data, digits.target, cv=5).mean())
print('Testing done')

print('Saving model ...', end=' ')
joblib.dump(model, 'model.pkl')
print('done')
