# Plan Chooser

## step to run manually
before the steps, make sure you have installed node in your local.

- make sure you are in the directory, by ``cd project name``.
- install the dependencies by``npm install``.
- make a mySQL table, for example``plan_chooser``.
- copy``.env.example`` and rename it into ``.env``, change value as needed, ex: your db credentials based on environment.
- run db migration by following syntax ``npx sequelize-cli db:migrate ``and  run db seed by following syntax ``npx sequelize-cli db:seed:all``, or just simpy by running ``entrypoint.sh``
- start the service by following syntax ``npm run dev``


# Running By Docker
## Build Docker Image

Go to the root directory that has `Dockerfile` and run the following command to build the Docker image.

```shell
docker build -t backend/choose-a-plan:dev-latest .
```

run `docker-compose.yml`, Change the values of environment variables and start docker container by following script:

```shell
docker-compose up -d
```

# simple running

run the startup bash script file by:

```shell
source ./startup.sh
```

## API Documentation

you can access the api documentation by this following:
``{host}:{port}/v1/api-docs/``


## Authentication

for create new subscribtion you will need bearer token for authentication, this step gonna explain how to get access-token:

- login by email and password using basic auth authentication, put your email as username and password as password, you can login by following api.
``POST {host}:{port}/api/auth``

- you will get the token on rhe response payload, which is you can use it as bearer token authorizarion for other endpoint authentication 


## Username and password

as we run the seeder in the step earlier, we can use:

```
username: user@mail.com
password: password123
```

```
username: agnes@mail.com
password: password123
```