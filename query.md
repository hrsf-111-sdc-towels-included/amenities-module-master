# Database Query study


### Query Execution Times (milliseconds)

| Before Optimization                 | MongoDB    | PostgreSQL |
|-------------------------------------|:----------:|:----------:|
| GET amenities                       | 3,963      | 17,126     |

| After Optimization                  | MongoDB    | PostgreSQL |
|-------------------------------------|:----------:|:----------:|
| GET amenities                       | 21         | 2          |    


### MongoDB Query: 
```
db.amensetlists.aggregate([
    {"$match":{"home_id": 1}},
    { $lookup:
       {
         from: 'amenitylists',
         localField: 'id',
         foreignField: 'amenities',
         as: 'sets'
       }
     }
    ])
```


### PostgreSQL Query:
```
SELECT amenities.* 
FROM amenities INNER JOIN amen_join_home 
ON amen_join_home.home_id = 100424 AND amen_join_home.amen_id = amenities.id;
```

