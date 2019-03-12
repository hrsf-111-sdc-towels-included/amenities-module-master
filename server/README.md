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
>all amenities data of the home being viewed.
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
>Does nothing
#### - POST -
>`/api/amenities/<itemID>`
#### Request
> Does nothing
#### Success 201
> Does Nothing

#### Failure 400
> Does Nothing

## Update
>Add an amenity
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
>remove an amenity 
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