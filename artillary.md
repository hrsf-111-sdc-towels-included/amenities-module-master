### Artillary Config:
```
config:
  target: 'http://localhost:3003'
  phases:
    - duration: 60
      arrivalRate: 1000
scenarios:
  - flow:
    - get:
        url: "/{{$randomNumber(1, 10000000)}"
    - get: 
        url: "/amenities/{{$randomNumber(1, 10000000}}"

```

### Results

```
  Scenarios launched:  90090
  Scenarios completed: 90090
  Requests completed:  180180
  RPS sent: 433.94
  Request latency:
    min: 0.8
    max: 1280.5
    median: 8.7
    p95: 18.1
    p99: 114.6
  Scenario counts:
    0: 90090 (100%)
  Codes:
    404: 180180
```