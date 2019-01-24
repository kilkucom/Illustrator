# Illustrator
Adobe Illustrator Scripts tricks and tutorials

### Table of Contents
* Script
    * Random Rotation
* Adobe Illustrator SDK 2017 on Windows 10 Pro Tutorial



#  **Scripts**

### Random Rotation



Script designed for random rotation of selected objects. Select object and run script  
![](https://github.com/kilkucom/Illustrator/blob/master/git/RandomRotation.gif)

# **Adobe Illustrator SDK 2017 on Windows 10 Pro Tutorial**
*Windows 10 Pro x64, Adobe Illustrator CC 23.0.1 (64b-bit)*

This tutorial presets how to install and run *Adobe Illustrator SDK 2017* on *Windows 10 Pro* using *Microsoft Visual Studio 2015 Community*. We are going to install missing *Visual C++* component and
run samplecode *LiveDropShadow* downloaded with SDK, then setup *Adobe Illustator CC* to read and run plugin.


In official guide Adobe suggests using *Windows 7 with Service Pack 1 or higher*, *Visual Studio 2015*, *Visual C++ 14* component.  
for more information go to Chapter *Setting up your development platform* on page 6  
[GETTING STARTED WITH ADOBE ILLUSTRATOR CC 2017 DEVELOPMENT](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/sdk/getting-started-guide-2017.pdf)  


### 1. Download Adobe Illustrator CC 2017 SDK
 * go to  `https://www.adobe.com/devnet/illustrator/sdk.html` and download zip file
 * extract `AI_CC_2017_SDK_Win.zip` wherever you want, in my case `C:\Adobe Illustrator CC 2017 SDK`

### 2. Download, install and run Visual Studio 2015
* download [Microsoft Visual Studio 2015 Community](https://go.microsoft.com/fwlink/?LinkId=532606&clcid=0x409), which is free, and you do not need to register
* install Visual Studio 2015
* when the installation is over Press `LAUNCH` and wait, until it opens, it may take some time on the first launch
* `Sign in` if you want, or press `Not now, maybe later.`
* choose you colour theme
* wait until it's finish setting up
* important: close Visual Studio

### 3. Install missing components for Visual Studio 2015
* go to `C:\Adobe Illustrator CC 2017 SDK\samplecode\LiveDropShadow\` and open `LiveDropShadow.vcxproj` with Visual Studio 2015
* window will appear asking you to install `Visual C++ 2015 Tools for Windows Desktop`
* continue installation, Visual Studio have to by closed in order to install any components   

If you run project `LiveDropShadow.vcxproj` now and try to build it, compilation will by interrupted by **Error RC1015 cannot open include file 'afxres.h'.**  
Apparently you still missing *Visual C++ MFC package* and you need to modify the Visual Studio 2015 setup and add the MFC. During following steps Visual Studio have to by closed.

* right click on Windows icon on taskbar and go to `Apps and Features`
* find `Microsoft Visual Studio Community 2015 with Updates` press and choose `Modify`
* in pop-up window choose `Modify`
* in select features choose `Programming Langeages / Visual C++ / Microsoft Foundation Classes for C++`, press `next` and `update`

If you try to build `LiveDropShadow.vcxproj` now everything should go smoothly to the very end, and then you will see  
**Microsoft Visual Studio Unable to start program ... Press OK** some kind of error window.  
Everything is OK, after successful compilation  Visual Studio just tried to open the plugin which is not standard Windows executable, we need to run it using Adobe Illustrator CC.  

I have `Adobe Illustrator CC 23.0.1 (64b-bit)`, and if I try compiling 32bit plugin Illustrator I got an error,  
so I switch Solution Platforms in Visual Studio from `x86` to `x64`  
Compiled plug-in is in `C:\Adobe Illustrator CC 2017 SDK\samplecode\output\win\Win32\Debug` or  `Release` depends if you compiled `Debug` or `Release`.  
If you have Illustrator (64b-bit) you will find compiled plugin in `C:\Adobe Illustrator CC 2017 SDK\samplecode\output\win\x64\Release` or `Debug`.

### 4. Setup Adobe Illustrator CC

* open `Adobe Illustator`, in my case Adobe Illustrator CC 23.0.1 (64b-bit)
* press `Ctrl + K`
* navigate to `Plug-ins & Scratch Disks`
* toggle `additional Plug-ins Folder`
* navigate to you plugin output folder `C:\Adobe Illustrator CC 2017 SDK\samplecode\output\win\x64\Release` in my case.
* restart `Adobe Illustator`

### 5. Finish

* run `Adobe Illustrator`
* create `new document`
* add some object, for example rectangle
* select object, go to `Object / SDK / LiveDropShadow / Make`
* done :)

*by [kilku.com](www.kilku.com) Paweł Szarzynski, Aleksander Janas  
date 15-01-2019*

#### Useful link  
[How to download Visual Studio Community Edition 2015 (not 2017)](https://stackoverflow.com/questions/44290672/how-to-download-visual-studio-community-edition-2015-not-2017)  
[Getting Started with Adobe Illustrator CC 2017 Development](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/sdk/getting-started-guide-2017.pdf)  
[fatal error RC1015: cannot open include file 'afxres.h'](https://community.developers.thomsonreuters.com/questions/8225/fatal-error-rc1015-cannot-open-include-file-afxres.html)
