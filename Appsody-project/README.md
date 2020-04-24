

# Pre-requisites
- Docker
- Appsody
- Nodejs


Once the above Pre-requisites are setup, 

> `cd Appsody-project`

> `Appsody run`

Once above command executed u will see similar output as below

```


    $ appsody run
    Running development environment...
    Pulling docker image docker.io/appsody/nodejs-express:0.4
    Running command: docker pull docker.io/appsody/nodejs-express:0.4
    0.4: Pulling from appsody/nodejs-express
    Digest: sha256:55ecd586bcaaeccea841f4b5476e3fdc2234bb95bf1660d6ab38a4ebbae3d7d9
    Status: Image is up to date for appsody/nodejs-express:0.4

```


now navigate to [http://localhost:3000](http://localhost:3000) to check if server is up and running 

```

        {
            "Running": [
                {
                    "Greeting": "Server up and running"
                }
            ]
        }

```



Now we are good with this project
