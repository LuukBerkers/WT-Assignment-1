/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 LexmarkWeb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

window.onload = function() {
  var elements = document.getElementsByTagName("*"),
    i;
  for (i in elements) {
    if (elements[i].hasAttribute && elements[i].hasAttribute("data-include")) {
      fragment(elements[i], elements[i].getAttribute("data-include"));
    }
  }
  function fragment(el, url) {
    var localTest = /^(?:file):/,
      xmlhttp = new XMLHttpRequest(),
      status = 0;

    xmlhttp.onreadystatechange = function() {
      /* if we are on a local protocol, and we have response text, we'll assume
	  	    things were successful */
      if (xmlhttp.readyState == 4) {
        status = xmlhttp.status;
      }
      if (localTest.test(location.href) && xmlhttp.responseText) {
        status = 200;
      }
      if (xmlhttp.readyState == 4 && status == 200) {
        el.outerHTML = xmlhttp.responseText;
      }
    };

    try {
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    } catch (err) {
      /* todo catch error */
    }
  }
};
