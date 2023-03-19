from flask import Flask
app = Flask(__name__)

@app.route('/')
def check():
	return 'Test.py- Rajat_CMSC447_HW2'


if __name__ == '__main__':
	app.run()
