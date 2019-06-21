# DigitRecognizer

[![Project Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://github.com/MartinKondor/DigitRecognizer/)
[![version](https://img.shields.io/badge/version-2019.07-brightgreen.svg)](https://github.com/MartinKondor/DigitRecognizer/)
[![GitHub Issues](https://img.shields.io/github/issues/MartinKondor/MovieRecommender.svg)](https://github.com/MartinKondor/DigitRecognizer/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Handwritten digit recognizer AI.

## Getting Started

### Prerequisites

* Python 3.6+
* Anaconda 4+ (optional)
* Python modules from the `requirements.txt`

### Deployment

Dowload and install the dependencies with the command:

```
$ python -m pip install -r requirements.txt
```

### Training

To train the model you should run:

`$ python trainer.py`

### For front end JS

If you want to use the model in HTML, you should run `porter model.pkl --js --pipe > "public/js/model.js"`.

After this, run `python port.py` and the estimator is ready to be used.

### Usage

To try the `model.pkl` estimator, go to this project's [github page](https://github.com/MartinKondor/DigitRecognizer/),
or open the `index.html` in the main directory and remove the `/DigitRecognizer/` root from the public links, like 

```
/DigitRecognizer/public/css/main.css
will be 
public/css/main.css
```

after this you will be able to work with the `index.html` file localy on your computer. 

## Contributing

This project is open for any kind of contribution from anyone.

### Steps

1. Fork this repository
2. Create a new branch (optional)
3. Clone it
4. Make your changes
5. Upload them
6. Make a pull request here
7. Profit.

## Authors

* **[Martin Kondor](https://github.com/MartinKondor)**

# License

See the [LICENSE](LICENSE) file for details.

