---
title: "How to build a tunable repeater on the cheap (Part 2)"
date: 2015-03-01T12:00:00-05:00
draft: false
tags: ["ham","repeater"]
categories: ["ham"]
series: ["ham"]
author: "N3BBQ"
---
How to build a tunable repeater on the cheap (Part 2)

In my [last post](/posts/how-to-build-a-tunable-repeater-on-the-cheap-part-1/), I went over the basic parts of a repeater, and said the parts I selected for our build.  I will go into the choices further and give some information about getting the baofeng working with a COR output.

The radio I selected was the Baofeng UV-5R.  Its schematics are available online, and I found that the radio only lights up its green RX LED circuit when the PL circuit breaks squelch when using tones (unlike other handsets that show receive, even though they don’t break squelch). This seemed like the perfect place to add a link from the hand held to the controller.

<img src="/static/images/how-to-build-a-tunable-repeater-on-the-cheap/baofeng-rxled-schematic-300x208.png" alt="Baofeng RX LED Schematic" width="300" />

The transistor shunts the circuit to ground (with the battery on the other side) when a signal comes from the radio’s PIC.  So we will have to keep a positive voltage on the COR line with a resistor so that when it shunts to ground, we can have the COR circuit go low when active (ACTIVE-LO polarity on the I/O menu of the ID-O-Matic).

So, I took the UV-5R apart (instructions are already on the web, so I will not duplicate them here), and found where the circuit physically is. It is by the PTT button, and wraps around the VFO-MR orange button.

<img src="/static/images/how-to-build-a-tunable-repeater-on-the-cheap/UV-5R_RX_Led_Circuit.jpg" alt="UV-5R RX Led Circuit" width="640" />

You do NOT need to remove the LCD screen for this mod.  But you should remove the speaker from the board connections, and the case, so you have room to route the wire out.  I drilled a hole in the case on the opposite side (where in front of where the mic/headset plugs are).  I soldered it directly to the bottom of the two transistors (the correct circuit in this case).

<img src="/static/images/how-to-build-a-tunable-repeater-on-the-cheap/testing_circuit.jpg" alt="UV-5R COR Circuit Testing" width="640" />

Here is when I was testing the circuit before I added a ground between the two (this will be added permanently when I add my [Byonics HTK2P cable](http://www.byonics.com/cables/tinytrak3_ht.php#htk) that will power the controller, and give me the speaker output all at once).

Once I verified that COR was working correctly, I packed it all back into its casing with the cable done in such a way that it could be used in the future.  The Baofeng is now modded to be used as a Receiver radio with the ID-O-Matic.

Stay tuned for more information on how to build a tunable repeater on the cheap!