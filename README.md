DESCRIPTION OF THE ARTEAM LABS PROJECT
======================================
Table of Contents
-----------------

1. Purposes of the project
2. Technologies used to develop the project
3. Getting started
4. Acknowledgements

Purposes of the project
-----------------------

The main point is to develop a web service that will assist users when composing legal documents. As of now people with no legal background that want to get a legal advice have to apply to professional lawyers or counselors or to risk doing all legal work by themselves. It is necessary to take into account that from 01 January 2019 only licensed attorneys will be allowed to work in courts. Obviously, their hourly rates will become higher. As it was already mentioned there is another option – self performed tasks by people with no knowledge in the field of law. Highly likely quality of such work will be poor. At the same time it is possible that this will become the one and only option for people that will consider rates of attorneys inexpedient. Therefore, we decided to create a project that will help such people to improve their work.

When people need legal services it is usually implied that they need a legal advice or legal document. We decided to start with a legal document. Our MVP generates a document basing on a ‘chatting’ with a user. In a nutshell, it is done through assembling of many templates (that depend on answers of users) into a single document. For our MVP we decided to design a solution for car accident cases where people need to get a compensation for damages of the car. This solution will be cheaper and faster than traditional human consulting as all work will be done automatically. At this stage the project is task-oriented but it is planned that in future it will work with the use of AI.

Technologies used to develop the project
----------------------------------------

When developing the project were used next technologies:
+ JS
+ React
+ PDFmake (library for JS)
+ Webpack

Getting started
---------------

First, download the project folder to your local machine.

Then, in the npm from the folder of the project run the following script `yarn run start`

Then, in the web browser will be opened a page with the project.
There will be demonstrated a generation of a document for car accidents cases.
Still it is a demo, so all legal context was replaced by fillers.

Acknowledgements
----------------

1. Many thanks for guys that developed JS, React, PDFmake, Webpack,babel-preprocessor, SASS and other awesome techs that were directly or indirectly used for the development of the project. Without them the implementation of the project would have been impossible.
2. Thanks for Andrew Khalupnyi for assistance in the development of the legal part of the project.