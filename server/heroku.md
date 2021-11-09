```
build:
  docker:
    web: Dockerfile
```

- heroku create services-app --remote heroku-app-microservices
- heroku git:remote --remote heroku-app-microservices -a services-app
- heroku stack:set container --app services-app
- git subtree push --prefix uniq8/microservices/\_services/user heroku-app-microservices master

Add bash

```
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apk add --no-cache bash
```
