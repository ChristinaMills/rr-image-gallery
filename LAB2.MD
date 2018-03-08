React/Redux Image Gallery Part 2
===

Enhance the Image Gallery to be able to choose from a list of albums

## Add in React Router

_Feel free to substitute slightly different names for things if you already have good code_

* `/` (home) displays a list of available albums (use server route `GET /api/albums`)
* Use a `Link` so that clicking on an album in the list changes the client route to `/albums/<id of album>`
* `Routes`:
  * `exact path="/" component={Albums}`
  * `path="/albums/:id" component={Album}`
  
## Editing Albums

You are welcome to do one of the following in regards to editing:

* Make your code work to update any album you are viewing, or
* Keep your album id hard coded for edits, but don't display edit options on albums that don't match that id

## Filter Images

* Add a client side filter that matches if either title or description `includes` the filter text
* Use a selector to apply the filter
* Choose one of the following:
  * Write a test for your selector
  * Use reselect to memoize your selector

## Rubric

* selector(s) **4pts**
* routes and params **3pts**
* filter functionality **3pts**