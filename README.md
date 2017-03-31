# Ping Pong (Week 3 Intro Project)

#### By Jonathon Kang

## Description

Exercise in Javascript/jQuery with looping and arrays. User inputs a number and the page returns a list of numbers with multiples of 3, 5 and 15 replaced with different words. Can handle number inputs of any size, though anything above 3 digits is not recommended. Can reject non-number inputs and recognize commas and floating point numbers, though it will round them to the nearest integer.

## Specifications
•	Rejects inputs with non-numeric characters.
  o	Example Input: 2a!
  o	Example Output: ‘Please enter a number’
•	Can count up to the inputted number.
  o	Example Input: 5
  o	Example Output: [1,2,3,4,5]
•	Can successfully replace multiples of 15 with ‘ping-pong’
  o	Example Input: 30
  o	Example Output:[1,2,3…,14,’ping-pong’,16…..28,29,’ping-pong’]
•	Can successfully replace multiples of 5 (but not 15) with ‘pong’
  o	Example Input: 10
  o	Example Output:[1,2,3,4,’pong’,6…9,’pong’]
•	Can successfully replace multiples of 3 (but not 15) with ‘ping’
  o	Example Input: 6
  o	Example Output: [1,2,’ping’,4,5,’ping’]
•	Recognizes numbers with commas
  o	Example Input: 2,000
  o	Example Output: [1,2,3……1999,2000]
•	Recognizes floating numbers and rounds to nearest integer
  o	Example Input: 2.5
  o	Example Output: [1,2,3]

## Setup/Installation Requirements

Clone the repository and open the index.html file in a browser of your choice. Make sure not to move any of the images or additional folders in the directory.

Alternatively, visit https://jk0609.github.io/pingpong to see the current live version.

## Technologies Used

HTML
CSS
Bootstrap
Javascript
JQuery

### License

Copyright 2017 Jonathon Kang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
