var element = document.createElement("script");
element.setAttribute("src", "https://spentaur.github.io/jsreader/jsreader.js");
document.head.prepend(element);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://spentaur.github.io/jsreader/jsreader.css");
document.head.prepend(element);

var sr = `<div id="mainDiv">

<br><br><br>
<div id="outputDiv">
    <span class="outputText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_</span><br>
    <span id="outputTextElement">&nbsp;</span><br>
    <span class="outputText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x00af;</span>
</div>

<br><br>

<div id="progressBarBaseDiv">
  <div id="progressBarDiv"></div>
</div>

<br><br>

<div id="controlButtons">
    <input type="button" class="controlButton" id="goBackButton"      value="&#x25c4;&#x25c4;">
    <input type="button" class="controlButton" id="startStopButton"   value="&#x25ba;">
    <input type="button" class="controlButton" id="pauseResumeButton" value="&#x258c;&#x2590;">
    <input type="button" class="controlButton" id="goForwardButton"   value="&#x25ba;&#x25ba;">
    <input type="button" class="controlButton" id="slowerButton"      value="&#x25bc;">
    <input type="button" class="controlButton" id="fasterButton"      value="&#x25b2;">
</div>

<br><br>

<div id="inputTextAreaDiv">
<textarea id="inputTextArea" class="UIInput" rows="8">
Paste the text you want to read here, set the words per minute to a comfortable reading rate, then click Start ( &#x25ba; ) to begin.

While reading, Spacebar pauses and resumes, Esc stops, Up Arrow increases the reading speed, Down Arrow slows the reading speed, Left Arrow will go back a second or so toward the beginning of a sentence, and Right Arrow will go ahead a few seconds toward the beginning of a paragraph.
</textarea>
<br><br>

<div id="speedAndCheckBoxesDiv">
<span class="UIText">Speed <input type="text" id="speedInputElement" class="UIInput" size="5" value="250">
<label><input type="checkbox" id="hideTextArea" checked>Hide text box when reading</label></span>
<span id="alsoTextSpan" class="UIDisabledText"><label><input type="checkbox" id="hideButtons" disabled>Also hide buttons</label></span>
<span class="UIText"><label><input type="checkbox" id="multiWordCheckBox">Display multiple words</label></span><br>
<span class="UIText">Average words per minute: <span id="wpmDisplay"></span></span>
</div>
</div>
</div>`

document.body.style = "overflow:hidden;"

var div = document.createElement("div")
div.style = 'width: 100%; height: 100vh; background-color: white; display: flex; z-index: 50; overflow: scroll;position: fixed;top: 0;'
div.innerHTML = sr
document.body.prepend(div)

// SpeedReader.init();