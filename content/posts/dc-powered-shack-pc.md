---
title: "DC Powered Shack PC"
date: 2015-09-14T12:00:00-05:00
draft: false
tags: ["ham"]
author: "N3BBQ"
---

Last week I was thinking about my new house and the awesome shack I could build in one of its many empty rooms.  All the pretty equipment I could buy started flowing through my head and our IRC channel.  Since the house is going to have a standby generator, I was thinking about a UPS for the desktop computers in the shack.  Then the idea came to me, why not run a DC powered computer?  Well, that sounded like a great idea!

Through my research, I found the Intel NUC machines.  I knew we used these at our office for our 40+ conference rooms, but I didn’t think about their power bricks for power.  After some researched, I found a few models that have their specs for 12V-19V.  These models are the NUC5i5RYK and NUC5i5RYH.  They are Core i5 processors with up to 16GB ram and m.2 SSD drives.  The K model only allows the m.2 SSD drive, while the H model allows a m.2 SSD drive AND a 2.5″ SSD SATA drive.  They are a case difference between them (take a look, you will see H is taller).

<a href="/static/images/dc-powered-shack-pc/image1.jpg"><img src="/static/images/dc-powered-shack-pc/image1.jpg" alt="NUC Wiring" width="300" style="vertical-align:top; float:right;" /></a>I got a NUC5i5RYK for testing, and put 16GB (2x 8gb So-dimm) memory and a 80gb m.2 SSD drive into it.  I installed Linux Mint for testing, but these will run windows 7 and 10 without problem.  I did a quick test on the machine to make sure everything was working, then I cut the cable off the power brick.  This is where the first surprise showed up.  The power supply cable is a simple coax type cable.  It had a foam dielectric, with a non braided shield and a multi threaded conductor center line.  This was fairly easy to change into Anderson Powerpole connectors with a little bit of heat shrink.

<a href="/static/images/dc-powered-shack-pc/image2.jpg"><img src="/static/images/dc-powered-shack-pc/image2.jpg" alt="NUC Idle Wattage" width="300" style="vertical-align:top; float:left;" /></a>Once I got it setup correctly with the powerpoles, I powered the NUC back up with my linear power supply.  It powered up nicely without any problems.  During bootup, my inline meter said it was pulling up to 23 watts, but when it got to the desktop screen (within about 10 seconds of total poweron), it was at its idle power usage of 8 watts.

20150914_180119I fired up Firefox on the desktop and started up a HD youtube video in full screen.  This gave me a power rating of around 20 watts while watching videos.  I couldn’t easily get it to pull more than this during my tests.

Since it was running off the power supply fine, I decided to put it on a small SLB I had laying around (that wasn’t fully charged).  This is when I decided to start taking pictures of the usage, so the voltage looks lower than my power supply was giving out.

20150914_191902It ran fine from 13.8V down to 9V.  Once it dropped below 9V, the NUC turned off.  Here you can see that it was running 9.38V and not having any issues.

So, what does this get us?  A dual screen capable PC that will run straight off your DC power distribution.  No external UPS needed if you already have a battery system for the shack for emergency power.  There is also no aidsy switched power supply wall warts to make noise in our local areas.  Next up?  Trying to find a good 12V monitor.

