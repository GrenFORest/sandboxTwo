//02.03

function encode(p){
    let dict = {'a':0, 'b':1, 'c':0, 'd':1, 'e':0, 'f':1, 'g':0, 'h':1, 'i':0, 'j':1, 'k':0, 
    'l':1, 'm':0, 'n':1, 'o':0, 'p':1, 'q':0, 'r':1, 's':0, 't':1, 'u':0,
    'v':1, 'w':0, 'x':1, 'y':0, 'z':1}
    return p.toLowerCase().split``.map(v=>dict.hasOwnProperty(v)?dict[v]:v).join``
  }

  console.log(encode('Hello world'));