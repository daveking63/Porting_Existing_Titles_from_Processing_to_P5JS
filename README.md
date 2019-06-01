As their statement of purpose suggests, the mission of the Processing Foundation is to "promote software literacy within the visual arts, and visual literacy within technology-related fields…" in order "… to empower people of all interests and backgrounds to learn how to program and make creative work with code."  They do this by "developing and distributing a group of related open-source software projects, including Processing (Java), p5.js (JavaScript), and Processing.py (Python)," as well as providing a variety of resources -- tutorials, examples and books -- that support the development of software literacy at various levels of expertise.

In the age of social media, the focus of the resources has trended toward tutorials and examples with less emphasis on more traditional written media like books.  This is especially true for p5.js and Processing.py. If you look at the 'official' listing of books for these projects, you'll see that the Processing.org site lists and describes 30 books (including 29 for Processing, one for p5.js, and none for Processing.py), while P5JS.org only lists a single title along with the Spanish translation of this title. 

The lack of titles for these latter two projects is partly attributable to the fact that they are still in the 'emergent' stage. For example, while Processing was initiated in 2001 by Casey Reas and Ben Fry, it wasn't until 2007 that the first edition of their book Processing: A Programming Handbook for Visual Designers and Artists was published. In the same vein, the first version of Processing.py was introduced in 2010, but the project didn't receive major funding support until 2014, and the first and only book to date devoted to this library -- Make: Getting Started with Processing.py by Parrish, Fry & Reas -- was published in 2016. Finally, p5.js was created in 2013 with the first book devoted to this subject -- Make: Getting Started with p5.js by McCarthy, Reas & Fry -- appearing shortly there after in 2015.  Essentially, the Processing.py and p5.js versions of 'Getting Started' were clones or ports of Reas and Fry's Make: Getting Started with Processing (1st edition 2010; 2nd edition 2015) which was an abbreviated version of their Handbook aimed at beginning programmers.  I should note, however, that this past year there a couple of new books devoted in p5.js.  One is Learn JavaScript with p5.js: Coding for Visual Learners (2018 by Erslan). The other is Make Your Own Algorithmic Art: A Gentle Introduction to Creative Coding with P5js  (2018 by Rashid).

Even though there are a sizeable number of users of these languages/libraries and the number is increasing daily, I don't expect to see a flood of new books devoted to these subjects. A better tact might be to port the code provided in the existing collection of Processing books to p5.js, to Processing.py, or possibly both. This is what Dan Shiffman did with his highly regarded books Learning Processing, Second Edition: A Beginner's Guide to Programming Images, Animation, and Interaction and The Nature of Code: Simulating Natural Systems with Processing. Instead of a rewrite of the text, he has provided both Processing and p5.js versions of the code on Github at: xxx. This is what  Gross, Bonacker, Laub and Lazzeroni did with their Generative Design book, although they also produced a new version of the book entitled Generative Design: Visualize, Program, and Create with JavaScript in p5.js. The associated code for both versions is found at: http://www.generative-gestaltung.de. Again, I don't expect the authors of these older titles to provide the port. So, in keeping with these earlier efforts, and as a bit of a one person crusade, I've decided to port a number of the collections to p5.js myself. 

To date, I've ported the code for the following titles:

	• Data-driven Graphic Design: Creative Coding for Visual Communication, 2016, Andrew Richardson.
	• Generative Art, 2011, Matt Pearson.
	• Processing: Creative Coding and Generative Art in Processing 2, 2013, Ira Greenberg, Dianna Xu and Deepak Kumar.
	• Processing for Visual Artists: How to Create Expressive Images and Interactive Art, 2010, Andrew Glassner.
	• Visualizing Data, 2007, Ben Fry (this is partially done)

The ported sketches are found in separate folders for each title. These folders also contain: a collection of html files for executing the individual (JavaScript) sketches; an overall html index for linking to the html files (running in a 'localhost' environment); and a zipfile containing sample images produced by each of the sketches.  If you look at the sketches you'll see a detailed attribution to author, the text and any code repositories holding the original .pde files.

If you want to use any of this code, remember to include the attribution. Also, my structure deviates from the standard sketch structure.  For example, in Github if you run across p5.js code you'll see the program labels as 'sketch.js' and the associated html file labeled as 'index.html.' This is fine if you want to work with and run the sketches one at a time.  However, it's a royal  pain the 'behind' if you plan to work with a collection of sketches and associated html files (all called 'sketch.js' and 'index.html').

In short order, I plan to 'fork' a number of the more interesting of these sketches to openprocessing.org.  These sketches can be found at:
 
https://www.openprocessing.org/user/76475

Finally,  I've included a list of the titles whose code I plan to (eventually) port.  The list is based on the official list of Processing books from the Processing Foundation.  However, I've added some additional info that may be of interest including where to find the current codebases and PDF versions of the titles (many of which are free).












