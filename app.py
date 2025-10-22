from flask import Flask, render_template

app = Flask(__name__)

# Home route
@app.route('/')
def index():
    return render_template('index.html')

# Health check route (Render uses this to verify uptime)
@app.route('/health')
def health():
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True)
