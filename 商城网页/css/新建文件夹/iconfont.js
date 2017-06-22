;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-locationfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C317.92 64 160 221.92 160 416c0 187.36 315.424 520.032 328.832 534.08C494.88 956.448 503.264 960 512 960c0.224 0 0.48 0 0.704 0 8.992 0 17.472-4.192 23.392-10.944l109.216-125.12C790.432 646.176 864 508.928 864 416 864 221.92 706.08 64 512 64zM512 576c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 576 512 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M235.097303 699.133018C247.384597 735.582848 286.382106 763.623932 324.772759 763.623932L861.658537 763.623932 880.429732 763.623932 885.649214 745.458146 1009.08775 315.845043C1021.388907 273.032339 993.187631 235.213675 949.051586 235.213675L424.585365 235.213675C410.791718 235.213675 399.609756 246.479262 399.609756 260.376068 399.609756 274.272875 410.791718 285.538462 424.585365 285.538462L949.051586 285.538462C959.924 285.538462 964.161052 291.220461 961.106394 301.851829L837.667859 731.464932 861.658537 713.299145 324.772759 713.299145C307.742153 713.299145 287.789837 698.952471 282.395194 682.949451L73.600164 63.566336C69.16437 50.407706 54.980454 43.363344 41.919502 47.832313 28.858551 52.301281 21.86648 66.591273 26.302275 79.749903L235.097303 699.133018Z"  ></path>' +
    '' +
    '<path d="M399.609756 902.017094C399.609756 846.429871 354.881911 801.367522 299.707317 801.367522 244.532723 801.367522 199.804878 846.429871 199.804878 902.017094 199.804878 957.604318 244.532723 1002.666667 299.707317 1002.666667 354.881911 1002.666667 399.609756 957.604318 399.609756 902.017094ZM249.756098 902.017094C249.756098 874.223482 272.120021 851.692307 299.707317 851.692307 327.294613 851.692307 349.658537 874.223482 349.658537 902.017094 349.658537 929.810705 327.294613 952.341879 299.707317 952.341879 272.120021 952.341879 249.756098 929.810705 249.756098 902.017094Z"  ></path>' +
    '' +
    '<path d="M924.097562 902.017094C924.097562 846.429871 879.369715 801.367522 824.195121 801.367522 769.020529 801.367522 724.292683 846.429871 724.292683 902.017094 724.292683 957.604318 769.020529 1002.666667 824.195121 1002.666667 879.369715 1002.666667 924.097562 957.604318 924.097562 902.017094ZM774.243902 902.017094C774.243902 874.223482 796.607825 851.692307 824.195121 851.692307 851.782419 851.692307 874.146342 874.223482 874.146342 902.017094 874.146342 929.810705 851.782419 952.341879 824.195121 952.341879 796.607825 952.341879 774.243902 929.810705 774.243902 902.017094Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)