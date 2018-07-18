Angular front end with express in the backend with mysql database demonstrating usage jwt token 
to implement role-based access in the front end.

# Running locally

### Setting up backend

`mysql` used in the backend. 
Install mysql client and the @types
```
npm install --save mysql
npm install --save-dev @types/mysql
```

#### Starting mysql locally

- `docker pull mysql:5.7` to get the mysql image
- `docker run -it -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql:5.7` to run docker image for mysql and expose on port 3306

Now create database and initial data:

```mysql
CREATE database test_db;
CREATE TABLE test_db.users (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  userid         VARCHAR(20),
  first_name     VARCHAR(20),
  last_name      VARCHAR(20)
);
```


#### starting backend locally

All backend code in the project folder `backend`.
`npm install` and 
`npm run watch` to run in watch mode during development.





### Starting front end
`cd front-end` and then 
`ng serve --proxy-config proxy-config.json` to proxy backend requests.

Upon successful login, server sends JWT token in a cookie and user is allowed to access the pages based on their
roles.

# Running in kubernetes cluster

1. build backend `npm run build`
2. build front-end `npm run package`
3. start minikube cluster `minikube start`
4. to use docker daemon in minkube `eval $(minikube docker-env)`
5. build docker image of the app 
```
$ cd backend
$ docker build -t "angular-node-mysql:1.0" .
```
6. create mysql service in minikube:
```
$ cd ../k8s
$ kubectl create -f mysql/mysql-pv.yaml
$ kubectl create -f mysql/mysql-deployment.yaml
```
7. Access the mysql pod from minikube dashboard and execute the following
TODO: create own mysql image with initial data
```mysql
mysql -u root -p and log on using default password
CREATE database test_db;
CREATE TABLE test_db.users (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  userid         VARCHAR(20),
  first_name     VARCHAR(20),
  last_name      VARCHAR(20)
);
INSERT into test_db.users (userid, first_name, last_name)
                  VALUES ('achalise', 'Arun', 'Chalise');

```
8. To run the app `kubectl create -f app/app-service.yaml`
9. Once the services have started, `minikube service example-app-service ` to launch the app on browser.