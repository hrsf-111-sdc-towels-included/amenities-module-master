# TOWELS INCLUDED
## Amenities CRUD API Documentation

## Related Projects

  - https://github.com/hrsf-111-sdc-towels-included/booking-module
  - https://github.com/hrsf-111-sdc-towels-included/reviews-module
  - https://github.com/hrsf-111-sdc-towels-included/photos-module

## Table of Contents
1. [Read](#Read)
1. [Create](#Create)
1. [Update](#Update)
1. [Delete](#Delete)

## Read
#### - GET -
>`/api/amenities/<itemID>`
#### Request
> No Expected Data On Body

#### Success 201
> Returns: 
```json
{
    id: Integer,
    name: String,
    appeal: Integer,
    category: String,
    common: Integer,
    description: String,
    img_url: String,
    amen_id: Integer,
    home_id: Integer,
    included: Integer }
```

#### Failure 400
> Does Nothing


## Create
#### - POST -
>`/api/amenities/<itemID>`
#### Request
> Expected Data On Body:
```json
{
    id: Integer,
    name: String,
    appeal: Integer,
    category: String,
    common: Integer,
    description: String,
    img_url: String,
    amen_id: Integer,
    home_id: Integer,
    included: Integer }
```
#### Success 201
> Does Nothing

#### Failure 400
> Does Nothing

## Update
#### - PUT -
>`/api/amenities/<itemID>/<amenId>`
#### Request
> Does nothing
#### Success 201
> Expected Data On Body:
```json
{
    id: Integer,
    name: String,
    appeal: Integer,
    category: String,
    common: Integer,
    description: String,
    img_url: String,
    amen_id: Integer,
    home_id: Integer,
    included: Integer }
```
#### Failure 400
> Does Nothing

## DELETE
#### - DELETE -
>`/api/amenities/<itemID>/<amenId>`
#### Request
> Does Nothing
#### Success 201
> Expected Data On Body:
```json
{
    id: Integer,
    name: String,
    appeal: Integer,
    category: String,
    common: Integer,
    description: String,
    img_url: String,
    amen_id: Integer,
    home_id: Integer,
    included: Integer }
```
#### Failure 400
> Does Nothing