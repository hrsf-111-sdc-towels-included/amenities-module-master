# amenities-module

> amenities module for the bread4bed mock front-end capstone

## Related Projects

  - https://github.com/CodeConcierge/booking-module
  - https://github.com/CodeConcierge/picture-view-module
  - https://github.com/CodeConcierge/Reviews-module

## Table of Contents

1. [Usage](#Usage)
2. [Development](#development)

#Usage

1. Full webapp on http://ec2-3-89-187-136.compute-1.amazonaws.com
  a. Edit the number at end of url to see various listings
2. If wanting to run on local host, see (#development)

#Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### Database Authentication
1. Rename `config_rename.js` to `config.js`
2. If mysql is not setup, see `### Mysql Setup` below.
3. If your mysql root user takes a password, please enter into into line 6 of the config.js file from step 1. Feel free to edit the user information as well, if you would prefer not to use root. 
*note* `config.js` is on the `.gitignore` file within this repo so that your password will not be uploaded to github. You will need to repeat these steps with every repo clone. 

### Database Seeding
1. Run `npm run seed` from within the amenities root directory
2. Test that table rows exist in the b4b_amenities database and amenities table by running in the mysql shell: 
`USE b4b_amenities`; 
`SELECT * FROM amenities`;  

### Mysql Setup
1. Install mysql5.7, if not already installed. Two commons options are Native Packages and Brew:
  a. Native Packages - https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html
  b. Brew - `brew install mysql@5.7`
2. Ensure that MySQL Server is running on your computer (`mysql.server start` or `brew services start mysql`)

### Bundle with Webpack
1. Run `npm run build`

### start a server with nodemon
1. Run `npm start`