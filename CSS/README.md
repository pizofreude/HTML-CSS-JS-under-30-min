# There are 3 Ways to Add CSS to HTML Page

HTML is the structure of our webpage.

CSS is the style applied to the webpage.

## 1. Inline Style

 This is achieved by adding Style Attributes with Properties inside a tag.

 For example, add `style="color:aqua"` in the `<p>` tag as seen below:

 ```html
 <p style="color:aqua">1. Inline Style: Adding Attribute Style with Properties.</p>
 ```

## 2. Internal Style

 This saves us a lot of time by defining Style Attributes with Properties:Value in the Head tag for specific tags.

 By this means, there is no need to define the style inside all tags one by one.

 We can use `p{}` as Style Definition with Properties inside it.

 See the example below:

 ```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--This is 2. Internal Style via p{} syntax for paragraph tag-->
    <style>
        p{
            /* color = Property | aliceblue = Value */
            color: aliceblue;
            background-color: bisque;
        }
    </style>
 </head>
 <body>

    <p>2. Internal Style: This saves time in defining styles.</p>
    <p>To do this, we add style tag in the head tag.</p>

 </body>
 </html>
 ```

 However, Inline Style will takes precedence over Internal Style if it exists in the body tag.

## 3. External Style Sheet aka CSS

 This is the most common way of adding CSS to HTML.

 We achieve it by adding Link tag to the Head tag and create a new CSS File where it stores all the Style Tags.

 Trivia: `/* */` is how to comment in CSS. It can be used as inline comment as well as newline comment.

 ```html
 <link rel="stylesheet" href="style.css">
 ```

 `rel="stylesheet"` is fix.

 We can manipulate the `href="style.css"` directory where we stores our CSS style.

 For example, if we want the CSS File location to be the same as our index.html file, we add directory before the CSS File name.

 With CSS Filename = style.css at current directory `./`, we get:

 ```html
 <link rel="stylesheet" href="./style.css">
 ```

 If the CSS File is already inside the same location as the HTML file, then providing the `style.css` alone in enough in the `href.`

 Inside the CSS File, we put all the Style Tags with Properties and Values as shown below:

 ```css
 /* This is CSS File */
 /* p = Paragraph Style Tag  */
 p{
    /* color = Property | whitesmoke = Value */
    color: whitesmoke;
    background: rebeccapurple;
 }
 ```

 Another important things to note are:

 1. Identifier @ ID
 2. Class

 We can add ID to tags in HTML & then reference it with #ID in CSS Files. For example, we add ID to our `<div>` in the index.html. This helps us to refer to a specific Tag with ID when defining styles. Refer the example below:

 ```html
 <div id="box">3. External Style: Tag with Identifier @ID</div>
 ```

 ```css
   /* This is CSS File */
  #box{
    /* color = Property | whitesmoke = Value */
    color: whitesmoke;
    background: rebeccapurple;
 }
 ```

 If we want to use multiple of similar tags, we shouldn't use ID since it's meant to be for a specific tag.

 In this case, we can use Class in the HTML file and refer it with dot operator in the CSS File. Refer to the code below:

 ```html
 <div class="carton-1">3. External Style: Tag with Class-1</div>  <br>
 <div class="carton-2">3. External Style: Tag with Class-2</div>  <br>
 ```

 ```css
 /* This is CSS File */
 .carton-1{
    /* color = Property | whitesmoke = Value */
    color: white;   /* Inline comment in CSS */
    background: yellow;
    font-size: 25px;
    font-style: normal;
    width: 300px;
    height: 70px;
 }
 ```

 So far we only use HTML methods of introducing spaces in the webpage. With aid from CSS, we can utilize space properties such as `margin`.
 
 `Margin: Value in Pixel` surrounds the carton with spaces as per defined value.

 `padding: Value in px` will add spaces inside the carton.
 
 Refer the example below:

 ```css
 /* This is CSS File */
  .carton-2{
    /* color = Property | whitesmoke = Value */
    color: white;   /* Inline comment in CSS */
    background: blue;
    font-size: 25px;
    font-style: normal;
    width: 300px;
    height: 70px;
    margin: 10px;  /*Add space outside*/
    padding: 10px;   /*Add space inside*/
    border: 2px solid green;   /*Add border outside*/
    float: right;  /*float horizontally instead of vertically align.*/
 }
 ```

 By default, all elements have a relative position to each other in the HTML Page. We can fix it via `position: absolute;.` Ensure to set the absolute position via Properties such as `top`, `left` and etc.

 ```html
 <div class="carton-3">3. External Style: Spaces via margin, padding, border, position properties.</div>
 ```

 ```css
 /* This is CSS File */
 .carton-3{
    color: white;
    background: rgb(37, 230, 56);
    font-size: 25px;
    font-style: normal;
    width: 300px;
    height: 80px;
    margin: 10px;  /*Add space outside*/
    padding: 10px;   /*Add space inside*/
    border: 2px solid green;   /*Add border outside*/
    position: absolute;  /*Default position is relative.*/
    top: 600px;
    left: 10px;
 }
```

## Conclusion

Now that we have covered the basic of HTML and CSS, try to copy other website as a practice.

Have fun onto the next JavaScript grind!

|￣￣￣￣￣￣￣￣￣￣￣￣￣|

          Your work matters,
      Even if it never goes viral! 
|＿＿＿＿＿＿＿＿＿＿＿＿＿|

                     \ (•◡•) / 
                      \      / 
                       —————
                       |    |
                       |_   |_