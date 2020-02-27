from http.server import HTTPServer, BaseHTTPRequestHandler
from functools import lru_cache
from io import BytesIO
@lru_cache(maxsize = 1000)

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hello, world!')

    def do_POST(self):
        n = self.rfile.read('http://localhost:3000/post')

        def fibonacci(n):
            if n in fibonacci_cache:
                return fibonacci_cache[n]
            if n == 1:
                return 1
            elif n == 2:
                return 1
            elif n > 2:
                return fibonacci(n - 1) + fibonacci(n - 2)

        for n in range(1, 1000):
            print(n, ":", fibonacci(n))

        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        response.write(fibonacci(n))
        self.wfile.write(response.getvalue())


httpd = HTTPServer(('localhost', 8080), SimpleHTTPRequestHandler)
httpd.serve_forever()
