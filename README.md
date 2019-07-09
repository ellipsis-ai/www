# Overview
This repo contains the static website for www.ellipsis.ai.
It is a static website built with Next.js (https://nextjs.org/) and hosted on an S3 bucket.


# Development
Once you clone the repo you can run a dockerized Node and see the website by typing:

```shell
$docker-compose up
```

Then open the browser at http://localhost:4000

Autoreload is enabled, thus as you change the source code the website will auto update in the browser.


# Deploying
The website is hosted on AWS S3: The Circle CI config file at .circleci/config.yml, uses aws cli to copy the static files to an S3 bucket. To see out the static files look like you can run 
```shell
$npm install && npm run build && npm run export
```
from the local container.

The AWS resources configuration for the staging environment is coded in Terraform and can be found at https://github.com/ellipsis-ai/command_center/terraform/envs/el-www-stag

The AWS resources for production are configured manually via the AWS web UI.

## Deploying to the staging environment
Once you are happy with your changes, it is time to test them on a staging environment. All you have to do is to push your changes to the remote repo and Circle CI will deploy the branch on our staging environment hosted at the el.tc domain (www.el.tc, el.tc. nocache.www.el.tc).
The domain el.tc is kept in it own AWS account:
Name: el-wwwstag 
ID: 546150357661 


## Deploying to production
To deploy to production simply push your changes to the prod branch. Circle CI will deploy the changes to ellipsis.ai.
