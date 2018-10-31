
$(document).ready(function(){
    // store code for your letters in variables

    var a = '<div class="letter" id="A"><div class="vertical left"></div><div class="verticalsf right"></div><div class="horizontal top"></div><div class="horizontal middle"></div></div>';
    var b = '<div class="letter" id="B"><div class="vertical left"></div><div class="verticalss rightone"></div><div class="verticalsl righttwo"></div><div class="horizontals top"></div><div class="horizontal middle"></div><div class="horizontal bottom"></div></div>';
    var c = '<div class="letter" id="C"><div class="vertical left"></div><div class="horizontals top"></div><div class="horizontal bottom"></div></div>';
    var d = '<div class="letter" id="D"><div class="vertical left"></div><div class="verticalsf right"></div><div class="horizontal top"></div><div class="horizontal bottom"></div></div>';
    var e = '<div class="letter" id="E"><div class="vertical left"></div><div class="horizontals top"></div><div class="horizontal middle"></div><div class="horizontal bottom"></div></div>';
    var f = '<div class="letter" id="F"><div class="vertical left"></div><div class="horizontals top"></div><div class="horizontal middle"></div></div>';
    var g = '<div class="letter" id="G"><div class="vertical left"></div><div class="horizontals top"></div><div class="horizontal bottom"></div><div class="verticalsl right"></div><div class="horizontalss middle"></div></div>';
    var h = '<div class="letter" id="H"><div class="vertical left"></div><div class="verticalsf right"></div><div class="horizontal middle"></div></div>';
    var i = '<div class="letter" id="I"><div class="vertical left"></div></div>';
    var j = '<div class="letter" id="J"><div class="vertical right"></div><div class="horizontal bottom"></div></div>';
    var k = '<div class="letter" id="K"><div class="vertical left"></div><div class="verticalss rightone"></div><div class="verticalsl righttwo"></div><div class="horizontal middle"></div></div>';
    var l = '<div class="letter" id="L"><div class="vertical left"></div><div class="horizontal bottom"></div></div>';
    var m = '<div class="letter" id="M"><div class="vertical left"></div><div class="verticalsf right"></div><div class="horizontal top"></div><div class="verticalss rightone"></div></div>';
    var n = '<div class="letter" id="N"><div class="vertical left"></div><div class="verticalsf right"></div><div class="verticalsf middle"></div><div class="horizontalss top"></div><div class="horizontalsss bottom"></div></div>';
    var o = '<div class="letter" id="O"><div class="vertical left"></div><div class="vertical right"></div><div class="horizontal top"></div><div class="horizontal bottom"></div></div>';
    var p = '<div class="letter" id="P"><div class="vertical left"></div><div class="horizontal top"></div><div class="horizontal middle"></div><div class="verticalss rightone"></div></div>';
    var q = '<div class="letter" id="Q"><div class="vertical left"></div><div class="vertical right"></div><div class="horizontals top"></div><div class="horizontal bottom"></div></div>';
    var r = '<div class="letter" id="R"><div class="vertical left"></div><div class="verticalss rightone"></div><div class="verticalsl righttwo"></div><div class="horizontals top"></div><div class="horizontal middle"></div></div>';
    var s = '<div class="letter" id="S"><div class="verticalfs left"></div><div class="horizontals top"></div><div class="horizontal middle"></div><div class="verticalsl righttwo"></div><div class="horizontal bottom"></div></div>';
    var t = '<div class="letter" id="T"><div class="vertical middle"></div><div class="horizontal top"></div></div>';
    var u = '<div class="letter" id="U"><div class="vertical left"></div><div class="vertical right"></div><div class="horizontal bottom"></div></div>';
    var v = '<div class="letter" id="V"><div class="verticallfs left"></div><div class="verticalsl righttwo"></div><div class="vbig"></div><div class="vsmall"></div></div>';
    var w = '<div class="letter" id="W"><div class="vertical left"></div><div class="verticalsf right"></div><div class="horizontal bottom"></div><div class="verticalss rightone"></div></div>';
    var x = '<div class="letter" id="X"><div class="xbig"></div><div class="xubig"></div><div class="xsmall"></div><div class="xusmall"></div></div>';
    var y = '<div class="letter" id="Y"><div class="verticallfs left"></div><div class="verticalsf right"></div><div class="horizontal middle"></div><div class="horizontal bottom"></div></div>';
    var z = '<div class="letter" id="Z"><div class="horizontals top"></div><div class="zbig"></div><div class="zsmall"></div><div class="horizontalz"></div></div>';
    

    $('#userInput input').keyup(function() {
        var index = $(this).data('index');
        var dInput = this.value;
            if (dInput == 'a') {
                dInput = a;
            } else if (dInput == 'b') {
                dInput = b;
            }else if (dInput == 'c') {
                dInput = c;
            }
            else if (dInput == 'd') {
                dInput = d;
            }
            else if (dInput == 'e') {
                dInput = e;
            }

            else if (dInput == 'f') {
                dInput = f;
            }
            else if (dInput == 'g') {
                dInput = g;
            }
            else if (dInput == 'h') {
                dInput = h;
            }
            else if (dInput == 'i') {
                dInput = i;
            }
            else if (dInput == 'j') {
                dInput = j;
            }
            else if (dInput == 'k') {
                dInput = k;
            }
            else if (dInput == 'l') {
                dInput = l;
            }
            else if (dInput == 'm') {
                dInput = m;
            }
            else if (dInput == 'n') {
                dInput = n;
            }
            else if (dInput == 'o') {
                dInput = o;
            }
            else if (dInput == 'p') {
                dInput = p;
            }
            else if (dInput == 'q') {
                dInput = q;
            }
            else if (dInput == 'r') {
                dInput = r;
            }
            else if (dInput == 's') {
                dInput = s;
            }
            else if (dInput == 't') {
                dInput = t;
            }
            else if (dInput == 'u') {
                dInput = u;
            }
            else if (dInput == 'v') {
                dInput = v;
            }
            else if (dInput == 'w') {
                dInput = w;
            }
            else if (dInput == 'x') {
                dInput = x;
            }
            else if (dInput == 'y') {
                dInput = y;
            }
            else if (dInput == 'z') {
                dInput = z;
            }
        $('#output'+index).html(dInput);
    })    

    // $('#index0').bind('keyup', 'a', function(){
    //     alert('hi');
    //     $('#output0').html(a);
    // });


    // append the variable to the page when certain keys are pressed
    // remove all classes, then add a new class to the body tag
    $(document).bind('keyup', 'a', function(){
        $('#typing').append(a);
        $('body').removeClass();
        $('body').addClass('a');
    });

    $(document).bind('keyup', 'b', function(){
        $('#typing').append(b);
        $('body').removeClass();
        $('body').addClass('b');
    });
    $(document).bind('keyup', 'c', function(){
        $('#typing').append(c);
        $('body').removeClass();
        $('body').addClass('c');
    });
    $(document).bind('keyup', 'd', function(){
        $('#typing').append(d);
        $('body').removeClass();
        $('body').addClass('d');
    });
    $(document).bind('keyup', 'e', function(){
        $('#typing').append(e);
        $('body').removeClass();
        $('body').addClass('e');
    });
    $(document).bind('keyup', 'f', function(){
        $('#typing').append(f);
        $('body').removeClass();
        $('body').addClass('f');
    });
    $(document).bind('keyup', 'g', function(){
        $('#typing').append(g);
        $('body').removeClass();
        $('body').addClass('g');
    });
    $(document).bind('keyup', 'h', function(){
        $('#typing').append(h);
        $('body').removeClass();
        $('body').addClass('h');
    });
    $(document).bind('keyup', 'i', function(){
        $('#typing').append(i);
        $('body').removeClass();
        $('body').addClass('i');
    });
    $(document).bind('keyup', 'j', function(){
        $('#typing').append(j);
        $('body').removeClass();
        $('body').addClass('j');
    });
    $(document).bind('keyup', 'k', function(){
        $('#typing').append(k);
        $('body').removeClass();
        $('body').addClass('k');
    });
    $(document).bind('keyup', 'l', function(){
        $('#typing').append(l);
        $('body').removeClass();
        $('body').addClass('l');
    });
    $(document).bind('keyup', 'm', function(){
        $('#typing').append(m);
        $('body').removeClass();
        $('body').addClass('m');
    });
    $(document).bind('keyup', 'n', function(){
        $('#typing').append(n);
        $('body').removeClass();
        $('body').addClass('n');
    });
    $(document).bind('keyup', 'o', function(){
        $('#typing').append(o);
        $('body').removeClass();
        $('body').addClass('o');
    });
    $(document).bind('keyup', 'p', function(){
        $('#typing').append(p);
        $('body').removeClass();
        $('body').addClass('p');
    });
    $(document).bind('keyup', 'q', function(){
        $('#typing').append(q);
        $('body').removeClass();
        $('body').addClass('q');
    });
    $(document).bind('keyup', 'r', function(){
        $('#typing').append(r);
        $('body').removeClass();
        $('body').addClass('r');
    });
    $(document).bind('keyup', 's', function(){
        $('#typing').append(s);
        $('body').removeClass();
        $('body').addClass('s');
    });
    $(document).bind('keyup', 't', function(){
        $('#typing').append(t);
        $('body').removeClass();
        $('body').addClass('t');
    });
    $(document).bind('keyup', 'u', function(){
        $('#typing').append(u);
        $('body').removeClass();
        $('body').addClass('u');
    });
    $(document).bind('keyup', 'v', function(){
        $('#typing').append(v);
        $('body').removeClass();
        $('body').addClass('v');
    });
    $(document).bind('keyup', 'w', function(){
        $('#typing').append(w);
        $('body').removeClass();
        $('body').addClass('w');
    });
    $(document).bind('keyup', 'x', function(){
        $('#typing').append(x);
        $('body').removeClass();
        $('body').addClass('x');
    });$(document).bind('keyup', 'y', function(){
        $('#typing').append(y);
        $('body').removeClass();
        $('body').addClass('y');
    });$(document).bind('keyup', 'z', function(){
        $('#typing').append(z);
        $('body').removeClass();
        $('body').addClass('z');
    });

    $(".input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.input').focus();
    }
});

    $(".inputLast").keyup(function () {
    if (this.value.length == this.maxLength) {
      location.reload()
    }
});
});

//      $(".inputLast").keyup(function () {
//     if (this.value.length == this.maxLength) {
//       $(".input").first('.input').focus();
//     }
// });




// function moveToNext(elem) {

//     // Focus on the next input box
//     var $next = $(elem).first('.input');

//     if ($next > 1) {
//         $(elem).next('.input').focus();
//     } else {
//         $(".input").first().focus();
//     }
    // }

    // function moveToPrev(elem) {

    //     // Focus on the next input box
    //     var $prev = $(elem).prev('.input');

    //     if ($prev.length) {
    //         $(elem).prev('.input').focus();
    //         elem.value = "";
    //     } else {
    //         $(".input").last().focus();
    //         elem.value = "";
    //     }
    // }

;



