# app.py
from flask import Flask, request, jsonify
from dotenv import set_key
from pathlib import Path
import os

app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify({"ok": True}), 200  # simple health check [web:59]

@app.get("/predict")
def predict():
    # Read query parameters, e.g., /predict?feature1=1.2&feature2=3.4
    f1 = request.args.get("feature1", type=float, default=0.0)
    f2 = request.args.get("feature2", type=float, default=0.0)
    # toy logic for demo
    pred = f1 + f2
    return jsonify({"features": {"feature1": f1, "feature2": f2}, "prediction": pred}), 200  # JSON response [web:59]

def write_env_variable(env_path: Path, key: str, value: str):
    if not env_path.exists():
        env_path.touch(mode=0o600, exist_ok=True)  # ensure .env exists [web:165]
    set_key(str(env_path), key, value)  # safe .env write [web:163]

if __name__ == "__main__":
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", "4000"))
    url = f"http://{host}:{port}"
    env_path = (Path(__file__).resolve().parent.parent / ".env")  # parent .env [web:163]
    write_env_variable(env_path, "PYTHON_URL", url)  # write discovered URL [web:163]
    print(f"Server starting on {url}", flush=True)  # log start [web:59]
    app.run(host=host, port=port)  # launch Flask [web:59]