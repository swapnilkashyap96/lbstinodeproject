const express=require("express");
const bodyParser=require("body-parser");
const path=require('path');





const app=express();
app.use('/assets',express.static('assets'));



//Pages Paths Here


const publicPath= path.join( __dirname,'public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');



app.get('/',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/index.html`)
});

app.get('/about',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/about.html`)
});


app.get('/franchies',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/franchies.html`)
});


app.get('/femalecourses',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/femalecourses.html`)
});

app.get('/franchies',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/franchies.html`)
});




app.get('/certificate',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/certificate.html`)
});

app.get('/courses',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/courses.html`)
});

app.get('/diploma',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/diploma.html`)
});




app.get('/courses/cwd',  ( _ ,res)=> {
  res.render('courses/cwd')
});

app.get('/courses/3dmax',  ( _ ,res)=> {
  res.render('courses/3dmax')
});

app.get('/courses/AESC',  ( _ ,res)=> {
  res.render('courses/AESC')
});

app.get('/courses/Advexcel',  ( _ ,res)=> {
  res.render('courses/Advexcel')
});

app.get('/courses/AreeWork',  ( _ ,res)=> {
  res.render('courses/AreeWork')
});

app.get('/courses/Autocad',  ( _ ,res)=> {
  res.render('courses/Autocad')
});

app.get('/courses/Beauticianself',  ( _ ,res)=> {
  res.render('courses/B(self)C')
});

app.get('/courses/Cplus',  ( _ ,res)=> {
  res.render('courses/C++')
});

app.get('/cacs',  ( _ ,res)=> {
  res.render('courses/cacs')
});

app.get('/courses/camcad',  ( _ ,res)=> {
  res.render('courses/CAM-CAD')
});

app.get('/courses/cco',  ( _ ,res)=> {
  res.render('courses/cco')
});

app.get('/courses/cmm',  ( _ ,res)=> {
  res.render('courses/cmm')
});

app.get('/courses/cmr',  ( _ ,res)=> {
  res.render('courses/cmr')
});

app.get('/courses/computerscience',  ( _ ,res)=> {
  res.render('courses/computerscience')
});

app.get('/courses/Cprogrmming',  ( _ ,res)=> {
  res.render('courses/Cprogrmming')
});

app.get('/courses/ctt',  ( _ ,res)=> {
  res.render('courses/ctt')
});

app.get('/courses/cwd',  ( _ ,res)=> {
  res.render('courses/cwd')
});

app.get('/courses/dabc',  ( _ ,res)=> {
  res.render('courses/dabc')
});

app.get('/courses/Dacs',  ( _ ,res)=> {
  res.render('courses/Dacs')
});

app.get('/courses/Dafa',  ( _ ,res)=> {
  res.render('courses/Dafa')
});

app.get('/courses/Daft',  ( _ ,res)=> {
  res.render('courses/Daft')
});

app.get('/courses/Dance',  ( _ ,res)=> {
  res.render('courses/Dance')
});

app.get('/courses/Dasd',  ( _ ,res)=> {
  res.render('courses/Dasd')
});

app.get('/courses/DataStur',  ( _ ,res)=> {
  res.render('courses/DataStur')
});

app.get('/courses/courses/Datd',  ( _ ,res)=> {
  res.render('courses/Datd')
});

app.get('/courses/Dbc',  ( _ ,res)=> {
  res.render('courses/Dbc')
});

app.get('/courses/Dch',  ( _ ,res)=> {
  res.render('courses/Dch')
});

app.get('/courses/Dchn',  ( _ ,res)=> {
  res.render('courses/Dchn')
});

app.get('/courses/Ddd',  ( _ ,res)=> {
  res.render('courses/Ddd')
});

app.get('/courses/Ddp',  ( _ ,res)=> {
  res.render('courses/Ddp')
});

app.get('/courses/Dfd',  ( _ ,res)=> {
  res.render('courses/Dfd')
});

app.get('/courses/Dgd',  ( _ ,res)=> {
  res.render('courses/Dgd')
});

app.get('/courses/DigitalMarketing',  ( _ ,res)=> {
  res.render('courses/DigitalMarketing')
});

app.get('/courses/Dit',  ( _ ,res)=> {
  res.render('courses/Dit')
});

app.get('/courses/Dmm',  ( _ ,res)=> {
  res.render('courses/Dmm')
});

app.get('/courses/Dom',  ( _ ,res)=> {
  res.render('courses/Dom')
});

app.get('/courses/Drawing&sketches',  ( _ ,res)=> {
  res.render('courses/Drawing&sketches')
});

app.get('/courses/DreamWeaver',  ( _ ,res)=> {
  res.render('courses/DreamWeaver')
});

app.get('/courses/Dst',  ( _ ,res)=> {
  res.render('courses/Dst')
});

app.get('/courses/Dtd',  ( _ ,res)=> {
  res.render('courses/Dtd')
});

app.get('/courses/DWD',  ( _ ,res)=> {
  res.render('courses/DWD')
});

app.get('/courses/Embroidery',  ( _ ,res)=> {
  res.render('courses/Embroidery')
});

app.get('/courses/EnglishTyping',  ( _ ,res)=> {
  res.render('courses/EnglishTyping')
});

app.get('/courses/Flash',  ( _ ,res)=> {
  res.render('courses/Flash')
});

app.get('/courses/FreeHand',  ( _ ,res)=> {
  res.render('courses/FreeHand')
});

app.get('/courses/Frontpage',  ( _ ,res)=> {
  res.render('courses/Frontpage')
});

app.get('/courses/GlassPainting',  ( _ ,res)=> {
  res.render('courses/GlassPainting')
});

app.get('/courses/HairStyle',  ( _ ,res)=> {
  res.render('courses/HairStyle')
});

app.get('/courses/HindiTyping',  ( _ ,res)=> {
  res.render('courses/HindiTyping')
});

app.get('/HtmlDhtml',  ( _ ,res)=> {
  res.render('courses/HtmlDhtml')
});

app.get('/courses/Illustrator',  ( _ ,res)=> {
  res.render('courses/Illustrator')
});

app.get('/courses/Internet',  ( _ ,res)=> {
  res.render('courses/Internet')
});
app.get('/courses/JavaAdv',  ( _ ,res)=> {
  res.render('courses/JavaAdv')
});

app.get('/courses/JavaCore',  ( _ ,res)=> {
  res.render('courses/JavaCore')
});

app.get('/courses/Javascript',  ( _ ,res)=> {
  res.render('courses/Javascript')
});

app.get('/courses/Mehandi',  ( _ ,res)=> {
  res.render('courses/Mehandi')
});

app.get('/courses/NET',  ( _ ,res)=> {
  res.render('courses/NET')
});

app.get('/courses/NIBPainting',  ( _ ,res)=> {
  res.render('courses/NIBPainting')
});

app.get('/courses/Office',  ( _ ,res)=> {
  res.render('courses/Office')
});

app.get('/courses/OilPainting',  ( _ ,res)=> {
  res.render('courses/OilPainting')
});

app.get('/courses/Oracle',  ( _ ,res)=> {
  res.render('courses/Oracle')
});

app.get('/courses/PageMaker',  ( _ ,res)=> {
  res.render('courses/PageMaker')
});

app.get('/courses/Photoshop',  ( _ ,res)=> {
  res.render('courses/Photoshop')
});

app.get('/courses/Quarkexpress',  ( _ ,res)=> {
  res.render('courses/Quarkexpress')
});

app.get('/courses/ScreenPainting',  ( _ ,res)=> {
  res.render('courses/ScreenPainting')
});

app.get('/courses/ShortHand',  ( _ ,res)=> {
  res.render('courses/ShortHand')
});

app.get('/courses/SoftToys',  ( _ ,res)=> {
  res.render('courses/SoftToys')
});

app.get('/courses/SprayPainting',  ( _ ,res)=> {
  res.render('courses/SprayPainting')
});

app.get('/courses/TallyAdv',  ( _ ,res)=> {
  res.render('courses/TallyAdv')
});

app.get('/courses/Tie&Dye',  ( _ ,res)=> {
  res.render('courses/Tie&Dye')
});

app.get('/courses/VisualBasic',  ( _ ,res)=> {
  res.render('courses/VisualBasic')
});


app.get('*',  ( _ ,res)=> {
  res.sendFile(`${publicPath}/404.html`)
});






app.listen(port, ()=>{
  console.log('Server Is Running Now ${port}');
});
