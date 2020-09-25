---
title: "How to build a tunable repeater on the cheap (Part 1)"
date: 2015-02-22T12:00:00-05:00
draft: false
tags: ["ham","repeater"]
categories: ["ham"]
series: ["ham"]
author: "N3BBQ"
---
I recently set off on a small quest of building an inexpensive same band repeater for portable and special uses where there are no current repeater coverage.  I wanted something low cost, portable, and tunable without special software.

I finally settled on using some parts I already had, and other parts which I could build.  Lets take a look at what the main components of a same band repeater are:

* Receiver Radio
* Controller
* Transmitter Radio
* Duplexer

Most people know what Receiver and Transmitters are.  This isn’t a repeater that is going to be used much, maybe one weekend a year.  Therefore, I decided to use the Baofeng UV-5R I have as the receiver radio since I will not be transmitting with this radio.  The Baofeng is what I consider a disposable radio, coming in at under $50 most of the time.

For the Controller, I selected the ID-O-Matic IV by Ham Gadgets with the additional Voice Module.  This kit cost me $49.  It does Time Out Timer (keeps the repeater from being keyed up too long), morse ID, and a voice ID.  It has a simple USB (serial) interface to change settings and update firmware.  The only problem with it and the baofeng, is that it requires a COR input to know when the receiver is receiving (and to PTT the transmitter), and the baofengs (and most hand helds) do not have this output.  Also, some controllers deal with the PL codes.  However, we will be using the PL decoder/encoder on our radios, so these can easily be changed in the field.

The Transmitting radio is where you would want to spend money.  I am using a mobile Kenwood TM-D710G as my transmitter radio.  Normally, this radio can do crossband repeating by itself (and even do ID when in this mode), but we are going to just be using 1 side of the radio for this project.

Finally, the all important Duplexer.  This is the hardest part to come by cheaply.  The Duplexer / Cavity filters are important so you can use one antenna between both antennas, but not have the transmitter desensitize the receiver.  These need to be tuned, so they only allow the two frequencies you want out of the duplexer for each radio.  Cheaper duplexers you can find on Ebay from china can work, but you must make sure they are tuned correctly!.  I selected a Chinese made UHF 6cavity duplexer, and requested them to tune it to specific frequencies for me.  This included a +5Mhz offset, like normal repeaters use.

Of course, there are other things that will need to be looked at, like power, and maybe a GPS unit to supply time to the controller, but those are generally things that you can build / pickup cheap locally and use for other projects too.

In Part II, I will be writing about adding the COR circuit to the Baofeng UV-5R, and getting the repeater wired up to the receiver correctly.