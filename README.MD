# ShowSeeker challenge

## Requirements

In our data grid users can change the days of the week a current line would air on. What we would like to see is how you would handle this particular request.

The function should be able to handle the following.

1. Accept days in the following formats:
* m,t,w,th,f,s,su
* mon, tue, etc
* monday, Tuesday, etc

2. The event should not be case sensitive
3. A dash (-) should be allowed for consecutive days (m-w = Monday, Tuesday, Wednesday)
4. Commas would allow individual days (th,s,su = Thursday, Saturday Sunday)
5. The dash and comma can be combined (m-w,s,su = Monday, Tuesday, Wednesday, Saturday, Sunday)
6. The function should return numbers to represent the days Sunday being 1 and Saturday being 7
7. It should not matter what order the days, dashes or commas are in. (th,m-w,su)

## Two solutions

I wrote to solutions and I prefer solution two.

## Test

First install the dependencies:

```shell
npm i
```

To test you can just run the command:

```shell
npm test
```
