nodeapiex
=========

0. Install post man client for chrome and import this json for the request

{"id":"77d177d6-e37e-4627-a535-5fa4e734215e","name":"rmresttest","timestamp":1407699930189,"requests":[{"collectionId":"77d177d6-e37e-4627-a535-5fa4e734215e","id":"35167a3c-0389-77fe-ea3a-f76e83fc2b79","name":"user post","description":"","url":"http://localhost:3000/api/users","method":"POST","headers":"","data":[{"key":"username","value":"wes1","type":"text"},{"key":"email","value":"wesley1@medullan.com","type":"text"},{"key":"dob","value":"2012-01-01","type":"text"}],"dataMode":"urlencoded","timestamp":0,"responses":[],"version":2}]}

1. Clone
2. run npm install in the root directory
3. Test API
4. get users - localhost:3000/api/users
5. create user - Run post request after importing settings above
6. delete user - localhost:3000/api/users/adsadjkjsk433
7. update user - localhost:3000/api/users - run post request above and change a parameter eg username and change request in drop   down to PUT
    
