function Museum (){

      const MuseumUrl = import.meta.env.VITE_PDF_URL_Museum
    return(
      <section id="museum_component" >
<h2>Atworth Village Museum</h2>
The Atworth Village Museum contains various exhibits showing artefacts and photographs from the village, and provides a glimpse into Atworth’s history. <br></br><br></br>
The museum is situated in <b>Poplar Farm Barn, Bradford Road, Atworth</b>, and is open on the <b>last Sunday of the month from March to October</b>, inclusive, from <b>2:00pm to 4:00pm</b>. Entrance is free.<br></br> <br></br>
If anyone would like to visit at any other time, please contact <b>David Hough</b> on <b>01225 793647</b>.<br></br><br></br>
Read more about the Atworth History Museum <span>
<a id = "museum_link" href={MuseumUrl} target="_blank" rel="noopener noreferrer">
 here
      </a> </span>in an interview between Professor Dowdeswell and Radio Wiltshire from 1989.

      </section>

)
}


export default Museum;