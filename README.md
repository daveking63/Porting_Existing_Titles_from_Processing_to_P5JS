<h3>Introduction</h3>

As their statement of purpose suggests, the mission of the Processing Foundation is to "promote software literacy within the visual arts, and visual literacy within technology-related fields…" in order "… to empower people of all interests and backgrounds to learn how to program and make creative work with code."  They do this by "developing and distributing a group of related open-source software projects, including Processing (Java), p5.js (JavaScript), and Processing.py (Python)," as well as providing a variety of resources -- tutorials, examples and books -- that support the development of software literacy at various levels of expertise.

In the age of social media, the focus on resources has trended toward tutorials and examples with less emphasis on more traditional written media like books.  This is especially true for p5.js and Processing.py. If you look at the 'official' listing of books for these projects, you'll see that the Processing.org site lists and describes 30 books of which only one pertains to p5.js. Similarly, the p5js.org sites details 2 books, although one is a Spanish translation of the other. There are no titles listed on the Processing.py site.

The lack of titles for these latter two projects is partly attributable to the fact that they are still 'emerging.' For example, while Processing was initiated in 2001 by Casey Reas and Ben Fry, it wasn't until 2007 that the first edition of their book <i>Processing: A Programming Handbook for Visual Designers and Artists</i> was published. In the same vein, the first version of Processing.py was introduced in 2010, but the project didn't receive major funding support until 2014, and the first and only book to date devoted to this library -- <i>Make: Getting Started with Processing.py</i> by Parrish, Fry & Reas -- was published in 2016. Finally, p5.js was created in 2013 with the first book devoted to this subject -- <i>Make: Getting Started with p5.js</i> by McCarthy, Reas & Fry -- appearing in 2015.  Essentially, the Processing.py and p5.js versions of 'Getting Started' were clones or ports of Reas and Fry's Make: Getting Started with Processing (1st edition 2010; 2nd edition 2015) which was an abbreviated version of their Handbook aimed at beginning programmers.  I should note, however, that this past year there a couple of new books devoted in p5.js.  One is Learn <i>JavaScript with p5.js: Coding for Visual Learners</i> (2018 by Erslan). The other is <i>Make Your Own Algorithmic Art: A Gentle Introduction to Creative Coding with P5js</i> (2018 by Rashid).

<h3>Porting Project</h3>

Even though there are a sizeable number of users of these languages/libraries and the number is increasing daily, I don't expect to see a flood of new books devoted to these subjects. A better tact might be to port the code provided in the existing collection of Processing books to p5.js, to Processing.py, or possibly both. This is what Dan Shiffman did with his highly regarded books <i>Learning Processing, Second Edition: A Beginner's Guide to Programming Images, Animation, and Interaction</i> and <i>The Nature of Code: Simulating Natural Systems with Processing</i>. Instead of a rewrite of the text, he has provided both Processing and p5.js versions of the code on Github at: https://github.com/nature-of-code (for both the .pde and p5.js sketches), https://github.com/shiffman/LearningProcessing (for the .pde sketches)  and https://github.com/shiffman/LearningProcessing-p5.js (obviously for the p5.js sketches)). This is also what  Gross, Bonacker, Laub and Lazzeroni did with their <i>Generative Design</i> book, although they also produced a new version of the book entitled <i>Generative Design: Visualize, Program, and Create with JavaScript in p5.js</i>. The associated code for both versions is found at: http://www.generative-gestaltung.de.

I don't expect the authors of these older titles to provide the port -- it's a tedious process with little monetary benefit. So, as a bit of a one person crusade, I've decided to port a number of the collections. To date, I've ported the code for the following titles:

<ul>
<li><i>Data-driven Graphic Design: Creative Coding for Visual Communication</i>, 2016, Andrew Richardson.</li>
<li><i>Generative Art</i>, 2011, Matt Pearson.</li>
<li><i>Processing: Creative Coding and Generative Art in Processing 2</i>, 2013, Ira Greenberg, Dianna Xu and Deepak Kumar.</li>
<li><i>Processing for Visual Artists: How to Create Expressive Images and Interactive Art</i>, 2010, Andrew Glassner.</li>
<li><i>Visualizing Data</i>, 2007, Ben Fry (this is partially done)</li>
</ul>

In this repository, there is one subdirectory for each title. Because of limits placed on the number of files in a subdirectory, each of these subdirectories contains a single zip file whose structure includes:

<ul>
<li><i>top level subdirectory</i> -- The name of this subdirectory is based on the associated book title (e.g. 'Data_Driven_Graphic_Design/').</li>
<li><i>html files and an index file</i> -- There is one html file for each sketch. The html file delineates required libraries, as well as a link to a specific sketch name. Additionally, there is an index html file that provides links to all of the sketches associated with the book (via the html files).</li>
<li><i>p5progs subdirectory</i> -- This subdirectory contains all of the sketches for a particular book title. The basic structure of the sketch name is 'sketch-<abbrev book title>-<chapter and section>_<short_description>.js'. The chapter and section designations depend on the specific book. For example, 'sketch-ddgd-ch4_e_AnimatingText.js' refers to the 4th chapter - section 'e' of Data Driven Graph Design. The sketch deals with animated text.</li>
<li><i>p5libs subdirectory</i> -- These are the p5.js libraries used (collectively) by the sketches.</li>
<li><i>data subdirectory</i> -- These are the data files or assets used collectively by the sketches.</li>
<li><i>images subdirectory</i> -- These are screen shots produced individually from the sketches. If you want a different screen shot, then the output of a sketch can be saved by simply typing 's' or 'S'.</li>
</ul>

I should note there is a bit of hard coding in the indexing file. If you look at the index file you'll see links of the following sort:

"<a href="http://localhost/Data_Driven_Graphic_Design/ddgd-sketch-ch1_a_Functions.html">sketch-ddgd-ch1_a_Functions.js</a>"

Here, the link is being executed via a 'localhost' setup where 'Data_Driven_Graphic_Design/' is the top-level subdirectory containing the files and structure noted above.  If you want to use the  index file with another setup up, then you'll probably use a global edit to replace 'localhost' with the appropriate server designation(s). Additionally, you can shift out the top-level subdirectory.  However, other changes to the structure are likely to be a little more onerous. For instance, changing the 'p5progs/', 'p5libs/' and 'data'/ subdirectory names would require a substantial change to all of the html files and in the case of the 'data' subdirectory to many of the sketches.

I should note that the structure I'm using deviates from the standard setup for p5.js code. Generally, individual sketches housed in separate directories that have descriptive names (e.g. ch01/functions/). In turn each subdirectory contains a single sketch and an associated html file. These files are titled 'sketch.js' and 'index.html', respectively. From my perspective, this is fine if you want to work a few files at a time. However, if you want to work with large collections of sketches, it makes it hard to distinguish one 'sketch.js' or 'index.html' from another.

To the best of my knowledge the code that I have ported and will be porting is in the public domain. Feel free to use it.  However, to keep things kosher, it would be good if you acknowledged the original source and author(s).  

In short order, I plan to 'fork' a number of the more interesting of these sketches to openprocessing.org.  These sketches can be found at:
 
https://www.openprocessing.org/user/76475

Finally,  I've included a list of the titles whose code I plan to (eventually) port. The list is contained in an Excel file and is based on the official list of Processing books from the Processing Foundation with a few additions.  However, I've added some additional info that may be of interest including where to find the current .pde codebases and PDF versions of the titles (many of which are free).












