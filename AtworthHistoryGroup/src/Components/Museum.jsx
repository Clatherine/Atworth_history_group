function Museum (){

      const MuseumUrl = import.meta.env.VITE_PDF_URL_Museum
    return(
      <section id="museum_component" >
<h2>Atworth Village Museum</h2><div id="museum_main">
<div id="museum_first"><p>The Atworth Village Museum contains various exhibits showing artefacts and photographs from the village, and provides a glimpse into Atworth’s history. <br></br><br></br>
The museum is situated in <b>Poplar Farm Barn, Bradford Road, Atworth, SN12 8HY </b>(what3words: sundial.harmless.states), and is open on the <b>last Sunday of the month from March to October</b>, inclusive, from <b>2:00pm to 4:00pm</b>. Entrance is free but donations are very welcome.<br></br><br></br>If anyone would like to visit at any other time, please contact <b>David Hough</b> on <b>01225 793647</b> or at <b>houghbizarre@gmail.com</b>.<br></br><br></br>
Read more about the Atworth History Museum in an <span><a className = "link" href={MuseumUrl} target="_blank" rel="noopener noreferrer">interview between Professor Dowdeswell and Radio Wiltshire
</a> </span> from 1989.</p></div>
{/* <div id="image_container"><img src="/images/Map showing museum.jpg" alt="Map showing location of the Atworth Museum"/>
</div> */}
</div>

      </section>

)
}


export default Museum;