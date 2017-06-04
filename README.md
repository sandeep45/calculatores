## pushing to s3

`aws s3 sync ./dist s3://quick-calculators --profile sandeep45`

## invalidating cloudfront cache

`aws cloudfront create-invalidation --distribution-id E2I62KLS7VM16M --paths '/*' --profile sandeep45`

## domains

- https://s3.amazonaws.com/quick-calculators/index.html
- http://quick-calculators.s3-website-us-east-1.amazonaws.com/index.html
- http://d2569vm9ojezge.cloudfront.net/index.html
- http://www.rentalcashflowcalculator.com/index.html
- http://rentalcashflowcalculator.com/index.html


`






